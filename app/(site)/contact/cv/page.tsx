import type { Metadata } from "next";
import { Card, PageShell } from "@/components/ui";
import { content } from "@/data/content";
import { PDF_NAME, PDF_URL, asset } from "@/lib/site";

export const metadata: Metadata = { title: "Mon CV" };

export default function CvPage() {
  const { contact, timeline, skills, about } = content;
  return (
    <PageShell
      crumbs={[{ label: "Contact", href: "/contact/" }, { label: "Mon CV" }]}
      title="Mon CV"
      intro="L'essentiel en une page. Le portfolio complet (CV, compétences et fiches mission) est disponible en PDF."
    >
      <div className="mb-8 flex flex-wrap gap-3">
        <a href={asset(contact.cvFile)} download="CV-Marin-Barroso.pdf" className="btn-neon">
          <span aria-hidden="true">⬇</span> {contact.cvButton}
        </a>
        <a href={PDF_URL} download={PDF_NAME} className="btn-ghost">
          <span aria-hidden="true">⬇</span> Télécharger le portfolio en PDF
        </a>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_2fr]">
        <div className="grid h-fit gap-5">
          <Card>
            <p className="text-xl font-extrabold">Marin Barroso</p>
            <p className="text-soft">Élève en 3e année de Bachelor en Sciences et Ingénierie</p>
            <ul className="mt-4 grid gap-1 text-sm">
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
              <li>{contact.city}</li>
              <li>{contact.license}</li>
            </ul>
          </Card>
          <Card>
            <p className="label-mono mb-2">Langues</p>
            <ul className="grid gap-1">
              {skills.languages.map((l) => (
                <li key={l.name}>
                  {l.name} : {l.level}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <p className="label-mono mb-2">Centres d&apos;intérêt</p>
            <ul className="grid gap-1">
              {about.interests.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="grid h-fit gap-5">
          <Card>
            <p className="label-mono mb-3">Formation</p>
            <ul className="grid gap-3">
              {timeline.education.map((e) => (
                <li key={e.title}>
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-sm text-soft">
                    {e.specialty} · {e.location} · {e.year}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <p className="label-mono mb-3">Expériences professionnelles</p>
            <ul className="grid gap-4">
              {timeline.experiences.map((e) => (
                <li key={e.title + e.year}>
                  <p className="font-semibold">
                    {e.year} · {e.title}
                  </p>
                  <p className="text-sm text-soft">
                    {e.company} · {e.duration}
                  </p>
                  {e.description && <p className="mt-1 text-sm text-fg">{e.description}</p>}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <p className="label-mono mb-3">Compétences techniques</p>
            <p className="text-fg">{skills.technical.map((s) => s.name).join(" · ")}</p>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
