import type { Metadata } from "next";
import Link from "next/link";
import { Card, PageShell, Tags } from "@/components/ui";
import { content } from "@/data/content";

export const metadata: Metadata = { title: "Missions" };

export default function MissionsPage() {
  return (
    <PageShell
      crumbs={[{ label: "Missions" }]}
      title="Toutes les missions"
      intro="Quatre missions détaillées : deux en entreprise, deux sur mon projet de moto 50 cm³."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {content.missions.map((m, i) => (
          <Link key={m.slug} href={`/missions/${m.slug}/`} className="block">
            <Card hover className="h-full">
              <p className="label-mono">
                Mission {i + 1} · {m.type === "Pro" ? "Stage" : "Projet perso"} · {m.year}
              </p>
              <h2 className="mt-2 text-xl font-semibold">{m.title}</h2>
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
    </PageShell>
  );
}
