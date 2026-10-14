import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // L'admin et la version imprimable du PDF n'ont pas à être indexés
    rules: { userAgent: "*", allow: "/", disallow: ["/portfolio/admin/", "/portfolio/impression/"] },
    sitemap: `${SITE_URL}sitemap.xml`,
  };
}
