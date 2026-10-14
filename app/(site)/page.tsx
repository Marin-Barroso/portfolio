import Link from "next/link";
import MissionCard from "@/components/MissionCard";
import Reveal from "@/components/Reveal";
import { Card } from "@/components/ui";
import { content } from "@/data/content";
import { PDF_NAME, PDF_URL, asset } from "@/lib/site";

export default function Home() {
  const { hero, missions, about } = content;
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="py-16 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
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
          <Reveal delay={0.1} className="relative mx-auto w-56 sm:w-64 md:w-72">
            <div className="absolute inset-x-4 bottom-0 top-10 rounded-[2rem] bg-gradient-to-b from-violet/50 to-teal/40 blur-2xl" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element -- export statique */}
            <img src={asset(about.image)} alt="Marin Barroso" className="relative w-full drop-shadow-2xl" />
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {hero.quickStats.map((s) => (
            <Card key={s.label} className="text-center">
              <p className="text-gradient text-3xl font-extrabold">{s.value}</p>
              <p className="mt-1 text-sm text-soft">{s.label}</p>
            </Card>
          ))}
        </Reveal>
      </section>

      <section id="a-propos" className="scroll-mt-24 pb-16">
        <Reveal>
          <h2 className="mb-6 text-2xl font-extrabold">À propos de moi</h2>
          <Card className="grid gap-6 md:grid-cols-[2fr_1fr]">
            <p className="text-lg leading-relaxed text-fg">{about.text}</p>
            <div>
              <p className="label-mono mb-3">Centres d&apos;intérêt</p>
              <ul className="grid gap-1.5 text-fg">
                {about.interests.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>
      </section>

      <section className="pb-8">
        <Reveal>
          <h2 className="mb-6 text-2xl font-extrabold">Missions récentes</h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {missions.slice(0, 3).map((m, i) => (
            <Reveal key={m.slug} delay={i * 0.08}>
              <MissionCard mission={m} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
