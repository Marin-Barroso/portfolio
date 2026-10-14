import type { MetadataRoute } from "next";
import { content } from "@/data/content";
import { NAV, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// Plan du site pour les moteurs de recherche : toutes les pages du menu et chaque fiche mission
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set<string>(["/"]);
  for (const s of NAV) for (const it of s.items ?? [{ href: s.href }]) paths.add(it.href.split("#")[0]);
  for (const m of content.missions) paths.add(`/missions/${m.slug}/`);
  return [...paths].map((p) => ({ url: `${SITE_URL}${p.replace(/^\//, "")}` }));
}
