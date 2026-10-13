import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, PageShell } from "@/components/ui";
import { content } from "@/data/content";

// Position sur l'échelle européenne (CECRL), le natif tout en haut
const LANGUAGE_LEVEL: Record<string, number> = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6, Natif: 7 };

export function generateStaticParams() {
  return content.skillCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: content.skillCategories.find((c) => c.slug === slug)?.title };
}

export default async function CompetencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = content.skillCategories.find((c) => c.slug === slug);
  if (!category) notFound();
  const skills = category.skills.map((name) => content.skills.technical.find((s) => s.name === name)!).filter(Boolean);

  return (
    <PageShell crumbs={[{ label: "Compétences" }, { label: category.title }]} title={category.title} intro={category.intro}>
      {slug === "langues-savoir-etre" && (
        <>
          <h2 className="mb-4 text-xl font-extrabold">Langues</h2>
          <Card className="mb-10">
            <ul className="grid gap-4">
              {content.skills.languages.map((l) => (
                <li key={l.name} className="grid grid-cols-[100px_1fr_60px] items-center gap-4">
                  <span className="font-semibold">{l.name}</span>
                  <span className="h-2 overflow-hidden rounded-full bg-white/15" aria-hidden="true">
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-violet to-teal"
                      style={{ width: `${((LANGUAGE_LEVEL[l.level] ?? 0) / 7) * 100}%` }}
                    />
                  </span>
                  <span className="text-right font-mono text-label">{l.level}</span>
                </li>
              ))}
            </ul>
          </Card>
          <h2 className="mb-4 text-xl font-extrabold">Organisation et relation</h2>
        </>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((s) => (
          <Card key={s.name} hover>
            <h3 className="text-lg font-semibold">{s.name}</h3>
            <p className="label-mono mt-1">{s.level}</p>
            {(s.linkedMissions.length > 0 || s.linkedExperiences.length > 0) && (
              <ul className="mt-4 grid gap-1 text-sm">
                {s.linkedMissions.map((i) => (
                  <li key={`m${i}`}>
                    <Link href={`/missions/${content.missions[i].slug}/`} className="text-aqua underline underline-offset-4">
                      Mission : {content.missions[i].title}
                    </Link>
                  </li>
                ))}
                {s.linkedExperiences.map((i) => (
                  <li key={`e${i}`} className="text-soft">
                    Expérience : {content.timeline.experiences[i].title}, {content.timeline.experiences[i].company}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>

      {slug === "langues-savoir-etre" && (
        <>
          <h2 className="mb-4 mt-12 text-xl font-extrabold">Tableau de valorisation des compétences</h2>
          <div className="glass overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/15">
                  {["Activité", "Savoir", "Savoir-faire", "Savoir-être"].map((h) => (
                    <th key={h} scope="col" className="label-mono p-4 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.competenceTable.map((r) => (
                  <tr key={r.activity} className="border-b border-white/10 last:border-0">
                    <th scope="row" className="p-4 font-semibold">
                      {r.activity}
                    </th>
                    <td className="p-4 text-fg">{r.savoir}</td>
                    <td className="p-4 text-fg">{r.savoirFaire}</td>
                    <td className="p-4 text-fg">{r.savoirEtre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </PageShell>
  );
}
