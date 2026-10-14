import Link from "next/link";
import { Card, Tags } from "@/components/ui";
import { content, type Mission } from "@/data/content";
import { asset } from "@/lib/site";

// Carte d'une mission (accueil et page Missions), avec sa vignette si elle en a une
export default function MissionCard({ mission: m, detailed = false }: { mission: Mission; detailed?: boolean }) {
  const n = content.missions.indexOf(m) + 1;
  return (
    <Link href={`/missions/${m.slug}/`} className="block h-full">
      <Card hover className="flex h-full flex-col overflow-hidden !p-0">
        {m.thumbnail && (
          // eslint-disable-next-line @next/next/no-img-element -- export statique, image déjà optimisée à l'envoi
          <img src={asset(m.thumbnail)} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
        )}
        <div className="flex flex-1 flex-col p-5">
          <p className="label-mono">
            Mission {n} · {m.type === "Pro" ? "Pro" : "Perso"} · {m.year}
          </p>
          <h3 className="mt-2 text-lg font-semibold">{m.title}</h3>
          <p className="mt-1 text-sm text-soft">
            {m.location}
            {detailed && ` · ${m.period}`}
          </p>
          {detailed && <p className="mt-3 text-fg">{m.details.mission}</p>}
          <Tags items={m.tags} />
          <p className="mt-auto pt-4 text-sm font-semibold text-aqua">Voir la fiche →</p>
        </div>
      </Card>
    </Link>
  );
}
