import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Card, Tags } from "@/components/ui";
import { content } from "@/data/content";
import { PDF_NAME, PDF_URL } from "@/lib/site";

export default function Home() {
  const { hero, missions } = content;
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="py-16 sm:py-24">
        <Reveal>
          <p className="label-mono mb-4">Arts et Métiers Bordeaux · Bachelor 3e année</p>
          <h1 className="text-gradient mb-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Marin Barroso, mécanique automobile et préparation course.
          </h1>
          <p className="mb-6 max-w-2xl text-lg text-soft">{hero.tagline}</p>
          <p className="mb-8 inline-flex items-center gap-3 rounded-full border border-aqua/40 bg-aqua/10 px-4 py-2 text-sm font-semibold text-aqua">
            <span className="h-2 w-2 animate-pulse rounded-full bg-aqua" aria-hidden="true" />
            {hero.badge}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/missions/" className="btn-neon">
              {hero.buttons.missions}
            </Link>
            <a href={PDF_URL} download={PDF_NAME} className="btn-ghost">
              <span aria-hidden="true">⬇</span> Télécharger en PDF
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {hero.quickStats.map((s) => (
            <Card key={s.label} className="text-center">
              <p className="text-gradient text-3xl font-extrabold">{s.value}</p>
              <p className="mt-1 text-sm text-soft">{s.label}</p>
            </Card>
          ))}
        </Reveal>
      </section>

      <section className="pb-8">
        <Reveal>
          <h2 className="mb-6 text-2xl font-extrabold">Missions récentes</h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {missions.slice(0, 3).map((m, i) => (
            <Reveal key={m.slug} delay={i * 0.08}>
              <Link href={`/missions/${m.slug}/`} className="block h-full">
                <Card hover className="h-full">
                  <p className="label-mono">
                    {m.type === "Pro" ? "Stage" : "Projet perso"} · {m.year}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{m.title}</h3>
                  <p className="mt-1 text-sm text-soft">{m.location}</p>
                  <Tags items={m.tags} />
                  <p className="mt-4 text-sm font-semibold text-aqua">Voir la fiche →</p>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
