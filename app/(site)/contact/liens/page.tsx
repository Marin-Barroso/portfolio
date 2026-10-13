import type { Metadata } from "next";
import { Card, PageShell } from "@/components/ui";
import { content } from "@/data/content";

export const metadata: Metadata = { title: "Liens" };

export default function LiensPage() {
  return (
    <PageShell crumbs={[{ label: "Contact", href: "/contact/" }, { label: "Liens" }]} title="Liens" intro="Où me retrouver.">
      <div className="grid gap-5 md:grid-cols-3">
        {content.links.map((l) => (
          <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
            <Card hover className="h-full">
              <p className="label-mono">{l.label}</p>
              <p className="mt-2 break-all text-lg font-semibold text-fg">{l.value}</p>
            </Card>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
