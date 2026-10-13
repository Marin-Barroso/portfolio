import type { Metadata } from "next";
import { Card, PageShell, Tags, PlaquetteButton } from "@/components/ui";
import { content } from "@/data/content";

export const metadata: Metadata = { title: "Stages et expériences" };

export default function ExperiencesPage() {
  return (
    <PageShell
      crumbs={[{ label: "Parcours" }, { label: "Stages et expériences" }]}
      title="Stages et expériences"
      intro="Garage, atelier de soudure, Fablab : mes expériences en entreprise, de la plus récente à la plus ancienne."
    >
      <ol className="grid gap-5 md:grid-cols-2">
        {content.timeline.experiences.map((e) => (
          <li key={e.title + e.year}>
            <Card hover className="h-full">
              <p className="label-mono">
                {e.year} · {e.duration}
                {e.isAutomotive && " · Mécanique"}
              </p>
              <h2 className="mt-2 text-lg font-semibold">{e.title}</h2>
              <p className="text-sm text-soft">{e.company}</p>
              {e.description && <p className="mt-3 text-fg">{e.description}</p>}
              {e.skills.length > 0 && <Tags items={e.skills} />}
            </Card>
          </li>
        ))}
      </ol>
      <PlaquetteButton />
    </PageShell>
  );
}
