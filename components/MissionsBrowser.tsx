"use client";

import { useState } from "react";
import MissionCard from "@/components/MissionCard";
import { content } from "@/data/content";

const GROUPS = [
  { id: "pro", title: "Missions pro", type: "Pro" },
  { id: "perso", title: "Missions perso", type: "Perso" },
];

// content.missions est déjà trié de la plus récente à la plus ancienne
export default function MissionsBrowser() {
  const [oldestFirst, setOldestFirst] = useState(false);
  const ordered = oldestFirst ? [...content.missions].reverse() : content.missions;

  return (
    <>
      <label className="mb-8 inline-flex items-center gap-3 text-sm">
        <span className="font-semibold">Trier</span>
        <select
          value={oldestFirst ? "old" : "new"}
          onChange={(e) => setOldestFirst(e.target.value === "old")}
          className="rounded-full border border-white/25 bg-white/[0.07] px-4 py-2 text-fg focus:border-aqua focus:outline-none [&>option]:bg-panel"
        >
          <option value="new">Plus récentes d&apos;abord</option>
          <option value="old">Plus anciennes d&apos;abord</option>
        </select>
      </label>

      {GROUPS.map((g) => {
        const list = ordered.filter((m) => m.type === g.type);
        if (list.length === 0) return null;
        return (
          <section key={g.id} id={g.id} className="mb-12 scroll-mt-24">
            <h2 className="mb-5 text-2xl font-extrabold">{g.title}</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {list.map((m) => (
                <MissionCard key={m.slug} mission={m} detailed />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
