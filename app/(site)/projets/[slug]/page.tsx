import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, PageShell, Tags, Todo } from "@/components/ui";
import { PROJECTS } from "@/lib/site";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: PROJECTS.find((p) => p.slug === slug)?.title };
}

export default async function ProjetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <PageShell crumbs={[{ label: "Projets perso" }, { label: project.title }]} title={project.title} intro={project.intro}>
      {project.items.length === 0 ? (
        <Todo>Cette page attend tes projets : titres, descriptions et photos.</Todo>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {project.items.map((it) => (
            <Card key={it.title} hover>
              <p className="label-mono">{it.kind}</p>
              <h2 className="mt-2 text-lg font-semibold">{it.title}</h2>
              <p className="mt-2 text-fg">{it.text}</p>
              <Tags items={it.tags} />
              {it.mission && (
                <Link href={`/missions/${it.mission}/`} className="mt-4 inline-block text-sm font-semibold text-aqua">
                  Voir la fiche mission →
                </Link>
              )}
            </Card>
          ))}
        </div>
      )}
    </PageShell>
  );
}
