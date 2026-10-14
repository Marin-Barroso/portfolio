import type { Metadata } from "next";
import MissionsBrowser from "@/components/MissionsBrowser";
import { PageShell } from "@/components/ui";

export const metadata: Metadata = { title: "Missions" };

export default function MissionsPage() {
  return (
    <PageShell
      crumbs={[{ label: "Missions" }]}
      title="Toutes les missions"
      intro="Mes missions détaillées, en entreprise et sur mes projets personnels."
    >
      <MissionsBrowser />
    </PageShell>
  );
}
