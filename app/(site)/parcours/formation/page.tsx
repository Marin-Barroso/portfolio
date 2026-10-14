import type { Metadata } from "next";
import { Card, PageShell, PlaquetteButton } from "@/components/ui";
import { content } from "@/data/content";

export const metadata: Metadata = { title: "Formation" };

export default function FormationPage() {
  return (
    <PageShell
      crumbs={[{ label: "Parcours" }, { label: "Formation" }]}
      title="Formation"
      intro="Du bac technologique au Bachelor en Sciences et Ingénierie des Arts et Métiers."
    >
      <ol className="relative grid gap-6 border-l-2 border-lilac/70 pl-6">
        {content.timeline.education.map((e) => (
          <li key={e.title} className="relative">
            <span className="absolute -left-[33px] top-6 h-4 w-4 rounded-full bg-gradient-to-br from-violet to-teal" aria-hidden="true" />
            <Card>
              <p className="label-mono">{e.year}</p>
              <h2 className="mt-1 text-xl font-semibold">{e.title}</h2>
              <p className="text-fg">{e.specialty}</p>
              <p className="mt-1 text-sm text-soft">{e.location}</p>
            </Card>
          </li>
        ))}
      </ol>

      <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-fg">
        Un bac+3 des Arts et Métiers, accrédité par la CTI : trois ans de projets concrets, de la conception à l&apos;atelier, et une dernière
        année en alternance pour apprendre sur le terrain.
      </p>
      <PlaquetteButton />
    </PageShell>
  );
}
