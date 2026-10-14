import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, KeyValues, PageShell, Tags } from "@/components/ui";
import { content } from "@/data/content";
import { asset } from "@/lib/site";

export function generateStaticParams() {
  return content.missions.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: content.missions.find((m) => m.slug === slug)?.title };
}

export default async function MissionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = content.missions.findIndex((m) => m.slug === slug);
  if (index === -1) notFound();
  const m = content.missions[index];
  const next = content.missions[(index + 1) % content.missions.length];

  return (
    <PageShell
      crumbs={[{ label: "Missions", href: "/missions/" }, { label: m.title }]}
      title={m.title}
      intro={`Mission ${index + 1} · ${m.type === "Pro" ? "Stage" : "Projet perso"} · ${m.location}`}
    >
      <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
        <Card>
          <KeyValues
            rows={[
              { label: "Période", value: m.period },
              { label: "Durée", value: m.duration },
              { label: "Poste", value: m.details.post },
              { label: "Mission", value: m.details.mission },
              { label: "Moyens", value: m.details.means },
              { label: "Contraintes", value: m.details.constraints },
              ...(m.result ? [{ label: "Résultat", value: m.result }] : []),
            ]}
          />
          {/* Les mots-clés déjà listés dans « Compétences mobilisées » ne sont pas répétés */}
          <Tags items={m.tags.filter((t) => !m.skills.some((sk) => sk.toLowerCase() === t.toLowerCase()))} />
        </Card>
        <Card>
          <p className="label-mono mb-3">Compétences mobilisées</p>
          <ul className="grid gap-2">
            {m.skills.map((s) => (
              <li key={s} className="text-fg">
                {s}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <h2 className="mb-4 mt-10 text-xl font-extrabold">Les étapes</h2>
      <ol className="grid gap-4 md:grid-cols-3">
        {m.details.steps.map((s, i) => (
          <li key={i}>
            <Card className="h-full">
              <p className="text-gradient text-3xl font-extrabold">{i + 1}</p>
              <p className="mt-2 text-fg">{s.caption}</p>
            </Card>
          </li>
        ))}
      </ol>

      {m.photos && m.photos.length > 0 && (
        <>
          <h2 className="mb-4 mt-10 text-xl font-extrabold">En images</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {m.photos.map((p) => (
              <figure key={p.image} className="glass overflow-hidden !p-0">
                <a href={asset(p.image)} target="_blank" rel="noopener noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element -- export statique, images déjà optimisées à l'envoi */}
                  <img src={asset(p.image)} alt={p.caption || m.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                </a>
                {p.caption && <figcaption className="px-4 py-3 text-sm text-soft">{p.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </>
      )}

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <Card>
          <p className="label-mono mb-2">Faits marquants</p>
          <p className="text-fg">{m.details.highlights}</p>
        </Card>
        <Card>
          <p className="label-mono mb-2">Ce que j&apos;ai appris</p>
          <p className="text-fg">{m.details.skills}</p>
        </Card>
        <Card>
          <p className="label-mono mb-2">Ce que j&apos;ai aimé</p>
          <p className="text-fg">{m.details.liked}</p>
        </Card>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href={`/missions/${next.slug}/`} className="btn-neon">
          Mission suivante : {next.title} →
        </Link>
        <Link href="/missions/" className="btn-ghost">
          Toutes les missions
        </Link>
      </div>
    </PageShell>
  );
}
