import type { Metadata } from "next";
import { Card, PageShell } from "@/components/ui";
import { PLAQUETTE_URL } from "@/lib/site";

export const metadata: Metadata = { title: "Plaquette de formation" };

// Synthèse du syllabus du Bachelor de Technologie (Arts et Métiers)
const YEARS = [
  {
    year: "1re année",
    title: "Les bases de l'ingénieur",
    text: "Mathématiques, mécanique du point, électricité, premiers programmes en Python et Arduino. En atelier : lecture de plans, dessin technique, schémas cinématiques et réalisation de pièces simples par enlèvement de matière, en sécurité. Stage exécutant de 4 semaines.",
  },
  {
    year: "2e année",
    title: "Concevoir et industrialiser",
    text: "Analyse fonctionnelle et cahier des charges, modélisation de mécanismes, choix et dimensionnement de solutions technologiques. Matériaux, énergétique, préparation de la fabrication (gamme d'usinage, fabrication additive) et métrologie. Stage technicien de 12 semaines.",
  },
  {
    year: "3e année",
    title: "Piloter en entreprise",
    text: "Lean manufacturing, conduite et gestion de projet, ouverture scientifique et semaines thématiques. L'année se déroule en contrat de professionnalisation, en alternance entre l'école et l'entreprise.",
  },
];

const PILLARS = [
  { title: "Concevoir", text: "CAO, modélisation de systèmes et partage de données dans un environnement PLM." },
  { title: "Réaliser", text: "Usinage, fabrication additive, avant-projets et gammes de fabrication." },
  { title: "Contrôler", text: "Spécifications géométriques, gammes de contrôle, capabilité et cartes de contrôle." },
  { title: "Organiser", text: "Lean, gestion de projet, management et communication, anglais sur les trois ans." },
];

export default function PlaquettePage() {
  return (
    <PageShell
      crumbs={[{ label: "Plaquette de formation" }]}
      title="Ma formation : Bachelor en Sciences et Ingénierie"
      intro="Spécialité mécanique-production, Arts et Métiers Bordeaux-Talence. Un diplôme bac+3 accrédité par la CTI, qui confère le grade de licence."
    >
      <Card className="mb-10">
        <div className="grid max-w-3xl gap-4 text-fg">
          <p>
            Le Bachelor de Technologie des Arts et Métiers forme en trois ans des techniciens supérieurs polyvalents pour l&apos;industrie. Sa
            pédagogie repose sur le projet technologique : chaque semestre associe sciences de l&apos;ingénieur, sciences humaines et un fil rouge
            « cycle de vie du produit » qui va de la conception à la fabrication puis au contrôle.
          </p>
          <p>
            La formation monte en puissance d&apos;une année à l&apos;autre, des bases scientifiques et de l&apos;atelier jusqu&apos;à
            l&apos;organisation de la production. Elle se termine par une année en alternance, pour arriver en entreprise avec des réflexes de
            terrain.
          </p>
        </div>
      </Card>

      <h2 className="mb-4 text-xl font-extrabold">Trois années, trois étapes</h2>
      <ol className="mb-10 grid gap-5 md:grid-cols-3">
        {YEARS.map((y) => (
          <li key={y.year}>
            <Card className="h-full">
              <p className="label-mono">{y.year}</p>
              <h3 className="mt-2 text-lg font-semibold">{y.title}</h3>
              <p className="mt-2 text-fg">{y.text}</p>
            </Card>
          </li>
        ))}
      </ol>

      <h2 className="mb-4 text-xl font-extrabold">Ce que j&apos;y apprends</h2>
      <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p) => (
          <Card key={p.title} hover>
            <h3 className="text-gradient text-lg font-extrabold">{p.title}</h3>
            <p className="mt-2 text-sm text-fg">{p.text}</p>
          </Card>
        ))}
      </div>

      <h2 className="mb-4 text-xl font-extrabold">La plaquette officielle</h2>
      <div className="mb-4 flex flex-wrap gap-3">
        <a href={PLAQUETTE_URL} download="Plaquette-Bachelor-Mecanique-Production.pdf" className="btn-neon">
          <span aria-hidden="true">⬇</span> Télécharger la plaquette
        </a>
        <a href={PLAQUETTE_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
          Ouvrir dans un nouvel onglet
        </a>
      </div>
      <div className="glass overflow-hidden !p-0">
        <iframe src={PLAQUETTE_URL} title="Plaquette du Bachelor en Sciences et Ingénierie, spécialité mécanique-production" className="h-[80vh] min-h-[500px] w-full bg-white" />
      </div>
    </PageShell>
  );
}
