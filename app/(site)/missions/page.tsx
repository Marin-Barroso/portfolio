import type { Metadata } from "next";
import Link from "next/link";
import { Card, PageShell, Tags } from "@/components/ui";
import { content } from "@/data/content";

export const metadata: Metadata = { title: "Missions" };

const GROUPS = [
  { id: "pro", title: "Missions pro", type: "Pro" },
  { id: "perso", title: "Missions perso", type: "Perso" },
];

export default function MissionsPage() {
  return (
    <PageShell
      crumbs={[{ label: "Missions" }]}
      title="Toutes les missions"
      intro="Mes missions détaillées, en entreprise et sur mes projets personnels."
    >
      {GROUPS.map((g) => {
        const list = content.missions.filter((m) => m.type === g.type);
        if (list.length === 0) return null;
        return (
          <section key={g.id} id={g.id} className="mb-12 scroll-mt-24">
            <h2 className="mb-5 text-2xl font-extrabold">{g.title}</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {list.map((m) => (
                <Link key={m.slug} href={`/missions/${m.slug}/`} className="block">
                  <Card hover className="h-full">
                    <p className="label-mono">
                      Mission {content.missions.indexOf(m) + 1} · {m.year}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">{m.title}</h3>
                    <p className="mt-1 text-sm text-soft">
                      {m.location} · {m.period}
                    </p>
                    <p className="mt-3 text-fg">{m.details.mission}</p>
                    <Tags items={m.tags} />
                    <p className="mt-4 text-sm font-semibold text-aqua">Voir la fiche →</p>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </PageShell>
  );
}
