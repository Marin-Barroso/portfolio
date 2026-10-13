import type { Metadata } from "next";
import { content } from "@/data/content";
import "./print.css";

// Source du PDF téléchargeable : une page HTML par page A4, imprimée par scripts/generate-pdf.mjs
export const metadata: Metadata = {
  title: "Portfolio PDF",
  robots: { index: false },
};

const SITE_URL = "https://marin-barroso.github.io/portfolio/";

const { hero, contact, about, skills, timeline, missions, competenceTable, skillCategories, alternance, formation } = content;
// Une fiche mission peut tenir sur plusieurs pages : la numérotation est faite par Chrome
// (marges @page de print.css), le sommaire renvoie donc vers des liens internes
const SUMMARY = [
  { label: "Profil et recherche d'alternance", id: "profil" },
  { label: "Curriculum vitae", id: "cv" },
  { label: "Compétences", id: "competences" },
  ...missions.map((m, i) => ({ label: `Mission ${i + 1} · ${m.title}`, id: m.slug })),
  { label: "Ma formation", id: "formation" },
];

function Page({ id, section, large, children }: { id: string; section: string; large?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`page${large ? " large" : ""}`}>
      <header className="page-head">
        <span>
          <b>Marin Barroso</b> · Portfolio
        </span>
        <span>{section}</span>
      </header>
      {children}
    </section>
  );
}

// Numéros (1, 2…) des missions où une compétence a été pratiquée
function missionNumbers(slugs: string[]) {
  return missions.flatMap((m, i) => (slugs.includes(m.slug) ? [i + 1] : []));
}

export default function PrintPortfolio() {
  return (
    <div className="pdf">
      {/* 1. Couverture */}
      <section className="page cover">
        <div>
          <p className="kicker">Portfolio · 2026</p>
          <h1 className="cover-name" style={{ marginTop: "10mm" }}>
            Marin
            <br />
            Barroso
          </h1>
          <p style={{ marginTop: "8mm", fontSize: "16pt", fontWeight: 600 }}>{hero.subtitle}</p>
          <p style={{ marginTop: "3mm", color: "#c4c4e8", maxWidth: "140mm" }}>{hero.tagline}</p>
          <p className="badge" style={{ marginTop: "8mm" }}>
            Recherche une alternance 2026-2027 · contrat de professionnalisation
          </p>
        </div>
        <div className="grid3" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          {hero.quickStats.map((s) => (
            <div key={s.label} className="stat">
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <div className="contact">
          <p>
            <span>Téléphone</span>
            <a href={`tel:${contact.phoneInternational}`}>{contact.phone}</a>
          </p>
          <p>
            <span>Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            <span>Localisation</span>
            {contact.city} · {contact.license}
          </p>
          <p>
            <span>Site</span>
            <a href={SITE_URL}>marin-barroso.github.io/portfolio</a>
          </p>
        </div>
      </section>

      {/* 2. Profil */}
      <Page id="profil" section="Profil">
        <div>
          <p className="kicker">Qui suis-je ?</p>
          <h2 className="title">Passionné de mécanique, à l&apos;aise en atelier comme au bureau</h2>
        </div>
        <p style={{ fontSize: "11pt" }}>{about.text}</p>
        <div className="box tint">
          <p className="h3">Ce que je recherche</p>
          <dl className="kv">
            {alternance.details.map((d) => (
              <div key={d.label} style={{ display: "contents" }}>
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
            <dt>Disponibilité</dt>
            <dd>{contact.availability}</dd>
          </dl>
        </div>
        <div className="grid2">
          <div className="box">
            <p className="h3">Langues</p>
            <ul className="list">
              {skills.languages.map((l) => (
                <li key={l.name} style={{ display: "flex", justifyContent: "space-between" }}>
                  <b>{l.name}</b>
                  <span>{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="box">
            <p className="h3">Centres d&apos;intérêt</p>
            <ul className="list" style={{ gap: "1.5mm" }}>
              {about.interests.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="box">
          <p className="h3">Sommaire</p>
          <ul className="list" style={{ gap: "1.2mm" }}>
            {SUMMARY.map((s) => (
              <li key={s.label}>
                <a href={`#${s.id}`}>
                  <span style={{ color: "var(--violet)", fontWeight: 800 }}>→</span> {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Page>

      {/* 3. CV */}
      <Page id="cv" section="Curriculum vitae">
        <div>
          <p className="kicker">Curriculum vitae</p>
          <h2 className="title">Formation et expériences</h2>
        </div>
        <div className="box">
          <p className="h3">Formation</p>
          <ul className="list">
            {timeline.education.map((e) => (
              <li key={e.title} className="tl-item">
                <span className="when">{e.year}</span>
                <span>
                  <b>{e.title}</b> · {e.specialty}
                  <br />
                  <span className="muted">{e.location}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="box">
          <p className="h3">Expériences professionnelles</p>
          <ul className="list">
            {timeline.experiences.map((e) => (
              <li key={e.title + e.year} className="tl-item">
                <span className="when">
                  {e.year}
                  <br />
                  <span className="muted" style={{ fontWeight: 400, fontSize: "8.5pt" }}>
                    {e.duration}
                  </span>
                </span>
                <span>
                  <b>{e.title}</b> · <span className="muted">{e.company}</span>
                  {e.description && (
                    <>
                      <br />
                      {e.description}
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Page>

      {/* 4. Compétences */}
      <Page id="competences" section="Compétences">
        <div>
          <p className="kicker">Compétences</p>
          <h2 className="title">Ce que je sais faire, et où je l&apos;ai appris</h2>
        </div>
        <div className="grid2">
          {skillCategories.map((c) => (
            <div key={c.slug} className="box">
              <p className="h3">{c.title}</p>
              <ul className="list" style={{ gap: "1.8mm" }}>
                {skills.technical
                  .filter((s) => s.category === c.slug)
                  .map((s) => {
                    const nums = missionNumbers(s.missions);
                    return (
                      <li key={s.name}>
                        <b>{s.name}</b>
                        <br />
                        <span className="muted" style={{ fontSize: "9pt" }}>
                          {s.level}
                          {nums.length > 0 && ` · mission${nums.length > 1 ? "s" : ""} ${nums.join(", ")}`}
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
        <div className="box">
          <p className="h3">Tableau de valorisation des compétences</p>
          <table className="table">
            <thead>
              <tr>
                <th>Activité</th>
                <th>Savoir</th>
                <th>Savoir-faire</th>
                <th>Savoir-être</th>
              </tr>
            </thead>
            <tbody>
              {competenceTable.map((r) => (
                <tr key={r.activity}>
                  <th>{r.activity}</th>
                  <td>{r.savoir}</td>
                  <td>{r.savoirFaire}</td>
                  <td>{r.savoirEtre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Page>

      {/* 5 à 8. Fiches mission */}
      {missions.map((m, i) => (
        <Page key={m.slug} id={m.slug} large section={`Mission ${i + 1} / ${missions.length}`}>
          <div>
            <p className="kicker">
              Mission {i + 1} · {m.type === "Pro" ? "Stage en entreprise" : "Projet personnel"}
            </p>
            <h2 className="title">{m.title}</h2>
            <p className="muted" style={{ marginTop: "2mm" }}>
              {m.location} · {m.period} · {m.duration}
            </p>
          </div>
          <div className="box tint">
            <dl className="kv">
              <dt>Poste</dt>
              <dd>{m.details.post}</dd>
              <dt>Mission</dt>
              <dd>{m.details.mission}</dd>
              <dt>Moyens</dt>
              <dd>{m.details.means}</dd>
              <dt>Contraintes</dt>
              <dd>{m.details.constraints}</dd>
            </dl>
          </div>
          <div>
            <p className="h3">Les étapes</p>
            <ol className="grid3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {m.details.steps.map((s, j) => (
                <li key={j} className="box">
                  <p className="step-num">{j + 1}</p>
                  <p style={{ marginTop: "2mm" }}>{s.caption}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid3">
            <div className="box">
              <p className="kicker" style={{ marginBottom: "2mm" }}>
                Faits marquants
              </p>
              <p>{m.details.highlights}</p>
            </div>
            <div className="box">
              <p className="kicker" style={{ marginBottom: "2mm" }}>
                Ce que j&apos;ai appris
              </p>
              <p>{m.details.skills}</p>
            </div>
            <div className="box">
              <p className="kicker" style={{ marginBottom: "2mm" }}>
                Ce que j&apos;ai aimé
              </p>
              <p>{m.details.liked}</p>
            </div>
          </div>
          {m.photos && m.photos.length > 0 && (
            <div className="grid2">
              {m.photos.slice(0, 2).map((p) => (
                <figure key={p.image} style={{ margin: 0 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- page imprimée en PDF */}
                  <img src={p.image} alt={p.caption || m.title} style={{ width: "100%", height: "42mm", objectFit: "cover", borderRadius: "3mm" }} />
                  {p.caption && (
                    <figcaption className="muted" style={{ fontSize: "8.5pt", marginTop: "1.5mm" }}>
                      {p.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
          <div>
            <p className="h3">Compétences mobilisées</p>
            <div className="tags">
              {[...m.skills, ...m.tags].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </Page>
      ))}

      {/* Dernière page : formation et contact */}
      <Page id="formation" section="Ma formation">
        <div>
          <p className="kicker">Ma formation</p>
          <h2 className="title">Bachelor en Sciences et Ingénierie, mécanique-production</h2>
          <p className="muted" style={{ marginTop: "2mm" }}>
            Arts et Métiers Bordeaux-Talence · bac+3 accrédité par la CTI, grade de licence
          </p>
        </div>
        <p>
          Le Bachelor de Technologie des Arts et Métiers forme en trois ans des techniciens supérieurs polyvalents pour l&apos;industrie. Sa
          pédagogie repose sur le projet technologique, de la conception à la fabrication puis au contrôle, et se termine par une année en
          alternance.
        </p>
        <div className="grid3">
          {formation.years.map((y) => (
            <div key={y.year} className="box">
              <p className="kicker">{y.year}</p>
              <p className="h3" style={{ marginTop: "1mm" }}>
                {y.title}
              </p>
              <p style={{ fontSize: "9.5pt" }}>{y.text}</p>
            </div>
          ))}
        </div>
        <div className="grid2" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "3mm" }}>
          {formation.pillars.map((p) => (
            <div key={p.title} className="box tint">
              <p className="h3" style={{ color: "var(--violet)" }}>
                {p.title}
              </p>
              <p style={{ fontSize: "9pt" }}>{p.text}</p>
            </div>
          ))}
        </div>
        <div className="box tint" style={{ marginTop: "auto", marginBottom: "6mm" }}>
          <p className="h3">Me contacter</p>
          <dl className="kv">
            <dt>Téléphone</dt>
            <dd>
              <a href={`tel:${contact.phoneInternational}`}>{contact.phone}</a>
            </dd>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </dd>
            <dt>Site</dt>
            <dd>
              <a href={SITE_URL}>{SITE_URL}</a>
            </dd>
          </dl>
        </div>
      </Page>
    </div>
  );
}
