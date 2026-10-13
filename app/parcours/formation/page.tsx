import type { Metadata } from "next";
import { Card, PageShell } from "@/components/ui";
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

      <h2 className="mb-4 mt-12 text-xl font-extrabold">Le Bachelor en trois ans</h2>
      <div className="grid gap-5 md:grid-cols-3">
        <Card>
          <p className="label-mono">1re année</p>
          <p className="mt-2 text-fg">Enseignements scientifiques et technologiques, projets de la conception à la réalisation, stage exécutant de 4 semaines.</p>
        </Card>
        <Card>
          <p className="label-mono">2e année</p>
          <p className="mt-2 text-fg">Ingénierie des produits, des procédés et des énergies, stage technicien de 12 semaines.</p>
        </Card>
        <Card>
          <p className="label-mono">3e année</p>
          <p className="mt-2 text-fg">Contrat de professionnalisation pour une immersion en entreprise et une montée en compétences.</p>
        </Card>
      </div>
    </PageShell>
  );
}
