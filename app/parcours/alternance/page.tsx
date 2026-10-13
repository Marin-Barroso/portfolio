import type { Metadata } from "next";
import Link from "next/link";
import { Card, KeyValues, PageShell, PlaquetteButton } from "@/components/ui";
import { content } from "@/data/content";

export const metadata: Metadata = { title: "Alternance 2026-2027" };

export default function AlternancePage() {
  return (
    <PageShell
      crumbs={[{ label: "Parcours" }, { label: "Alternance 2026-2027" }]}
      title="Alternance 2026-2027"
      intro={content.alternance.intro}
    >
      <Card>
        <KeyValues rows={[...content.alternance.details, { label: "Disponibilité", value: content.contact.availability }]} />
      </Card>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/contact/" className="btn-neon">
          Me contacter
        </Link>
        <Link href="/contact/cv/" className="btn-ghost">
          Voir mon CV
        </Link>
      </div>
      <PlaquetteButton />
    </PageShell>
  );
}
