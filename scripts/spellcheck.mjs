// Corrige automatiquement les fautes dans les textes modifiables depuis /admin (data/*.json)
// avec l'API publique de LanguageTool. Seules les corrections sûres sont appliquées :
// accents oubliés et accords avec une seule proposition. Les noms propres, sigles et mots
// techniques ne sont jamais modifiés. En cas d'erreur réseau, rien n'est changé.
import { appendFile, readFile, writeFile } from "node:fs/promises";

const FILES = ["data/missions.json", "data/skills.json", "data/parcours.json"];
// Clés techniques (identifiants, liens, dates) à ne jamais corriger
const SKIP_KEYS = new Set(["slug", "type", "category", "missions", "experiences", "year", "period", "duration", "isAutomotive", "image", "thumbnail", "start"]);
// Mots inconnus du dictionnaire mais corrects
const IGNORE = new Set(["cyclo", "cyclomoteur", "cyclomoteurs", "micro-pieux", "vidange", "faisceaux", "itec", "redessin"]);
// Catégories de fautes à corriger ; la typographie et le style sont laissés tels quels
const GRAMMAR = /GRAMM|ACCORD|AGREEMENT|CONJUG|HOMONYM/i;

const strip = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

function pickFix(match, original) {
  const options = match.replacements.map((r) => r.value).filter(Boolean);
  if (options.length === 0) return null;
  if (/[A-Z0-9]/.test(original) || IGNORE.has(original.toLowerCase())) return null;
  const cat = match.rule.category.id;
  if (cat === "TYPOS") {
    // Faute d'orthographe : seulement un accent oublié ou mal placé (vehicule → véhicule)
    return options.slice(0, 3).find((o) => o !== original && strip(o) === strip(original)) ?? null;
  }
  if (GRAMMAR.test(cat) || GRAMMAR.test(match.rule.id)) {
    // Accord ou conjugaison : la seule proposition, ou celle qui garde le premier mot
    // (« des véhicule » → « des véhicules » plutôt que « du véhicule »)
    if (options.length === 1) return options[0];
    const first = original.split(" ")[0];
    const keep = options.slice(0, 3).filter((o) => o.split(" ")[0] === first);
    return original.includes(" ") && keep.length === 1 ? keep[0] : null;
  }
  return null;
}

async function check(text) {
  const res = await fetch("https://api.languagetool.org/v2/check", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ text, language: "fr" }),
  });
  if (!res.ok) throw new Error(`LanguageTool : ${res.status}`);
  return (await res.json()).matches;
}

// Rassemble les chaînes à vérifier avec une fonction pour les réécrire
function collect(node, out, key = "") {
  if (typeof node === "string") return;
  for (const [k, v] of Object.entries(node)) {
    const name = Array.isArray(node) ? key : k;
    const isText = typeof v === "string" || (Array.isArray(v) && v.every((x) => typeof x === "string"));
    if (SKIP_KEYS.has(name) && isText) continue;
    if (typeof v === "string" && v.trim()) out.push({ get: () => node[k], set: (s) => (node[k] = s) });
    else if (v && typeof v === "object") collect(v, out, name);
  }
}

let total = 0;
// Pour le rapport : corrections appliquées et fautes possibles laissées à vérifier
const applied = [];
const remaining = [];
for (const file of FILES) {
  const data = JSON.parse(await readFile(file, "utf8"));
  const fields = [];
  collect(data, fields);

  // Un seul appel par fichier : les textes sont séparés par des lignes vides
  const SEP = "\n\n";
  let text = "";
  const ranges = fields.map((f) => {
    const start = text.length;
    text += f.get() + SEP;
    return { f, start, end: start + f.get().length };
  });

  let matches;
  try {
    matches = await check(text);
  } catch (err) {
    console.warn(`Correction ignorée pour ${file} : ${err.message}`);
    continue;
  }

  // Applique les corrections de la fin vers le début pour garder les positions valides
  const edits = new Map();
  for (const m of matches) {
    const r = ranges.find((x) => m.offset >= x.start && m.offset + m.length <= x.end);
    if (!r) continue;
    const original = text.slice(m.offset, m.offset + m.length);
    const fix = pickFix(m, original);
    if (!fix) {
      // Les noms propres et sigles (majuscule, chiffre, @, &) ne sont pas signalés : ce sont presque toujours des faux positifs
      const properNoun = /[A-Z0-9@&]/.test(original) || IGNORE.has(original.toLowerCase());
      if (!properNoun && (m.rule.category.id === "TYPOS" || GRAMMAR.test(m.rule.category.id) || GRAMMAR.test(m.rule.id))) {
        const context = text.slice(Math.max(r.start, m.offset - 30), Math.min(r.end, m.offset + m.length + 30));
        remaining.push({ file, original, context, suggestions: m.replacements.slice(0, 3).map((x) => x.value) });
      }
      continue;
    }
    if (!edits.has(r)) edits.set(r, []);
    edits.get(r).push({ from: m.offset - r.start, to: m.offset - r.start + m.length, fix, original });
  }
  for (const [r, list] of edits) {
    let s = r.f.get();
    for (const e of list.sort((a, b) => b.from - a.from)) {
      s = s.slice(0, e.from) + e.fix + s.slice(e.to);
      console.log(`${file} : « ${e.original} » → « ${e.fix} »`);
      applied.push({ file, ...e });
      total++;
    }
    r.f.set(s);
  }
  if (edits.size) await writeFile(file, JSON.stringify(data, null, 2) + "\n");
  await new Promise((ok) => setTimeout(ok, 3500)); // limite de l'API gratuite
}
console.log(total ? `${total} correction(s) appliquée(s).` : "Aucune faute à corriger.");

// Rapport lisible : résumé du job GitHub Actions et fichier repris dans l'issue « Fautes à vérifier »
const lines = [];
if (applied.length) {
  lines.push("## Corrections appliquées automatiquement", "");
  for (const a of applied) lines.push(`- \`${a.file}\` : « ${a.original} » → « ${a.fix} »`);
  lines.push("");
}
if (remaining.length) {
  lines.push("## Fautes possibles à vérifier dans l'admin", "");
  lines.push("Le correcteur hésite sur ces passages : il ne les a pas modifiés.", "");
  for (const r of remaining) {
    const sugg = r.suggestions.length ? ` (suggestions : ${r.suggestions.join(", ")})` : "";
    lines.push(`- « …${r.context.replace(/\s+/g, " ")}… » : **${r.original}**${sugg}`);
  }
  lines.push("");
}
const report = lines.join("\n");
await writeFile("spellcheck-report.md", report);
await writeFile("spellcheck-remaining.txt", String(remaining.length));
if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, report || "Aucune faute détectée.\n");
