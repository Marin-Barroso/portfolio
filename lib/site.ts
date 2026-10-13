import { content } from "@/data/content";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

// next/link ajoute le basePath tout seul, mais pas un <a download> vers un fichier de public/
export const PDF_URL = `${BASE_PATH}/portfolio-marin-barroso.pdf`;
export const PDF_NAME = "Portfolio-Marin-Barroso.pdf";
export const PLAQUETTE_URL = `${BASE_PATH}/plaquette-bachelor-mecanique-production.pdf`;

// Les projets sans contenu restent hors ligne tant qu'ils ne sont pas remplis
export const PROJECTS = content.projects.filter((p) => p.items.length > 0);

export type NavItem = { label: string; href: string };
// footer remplace items dans le plan du site quand la liste complète serait trop longue
export type NavSection = { label: string; href: string; items?: NavItem[]; footer?: NavItem[] };

export const NAV: NavSection[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Parcours",
    href: "/parcours/formation/",
    items: [
      { label: "Formation", href: "/parcours/formation/" },
      { label: "Stages et expériences", href: "/parcours/experiences/" },
      { label: "Alternance 2026-2027", href: "/parcours/alternance/" }
    ]
  },
  {
    label: "Missions",
    href: "/missions/",
    footer: [
      { label: "Toutes les missions", href: "/missions/" },
      { label: "Missions perso", href: "/missions/#perso" },
      { label: "Missions pro", href: "/missions/#pro" }
    ],
    items: [
      { label: "Toutes les missions", href: "/missions/" },
      ...content.missions.map((m) => ({ label: m.title, href: `/missions/${m.slug}/` }))
    ]
  },
  {
    label: "Compétences",
    href: `/competences/${content.skillCategories[0].slug}/`,
    items: content.skillCategories.map((c) => ({ label: c.title, href: `/competences/${c.slug}/` }))
  },
  {
    label: "Projets perso",
    href: `/projets/${PROJECTS[0].slug}/`,
    items: PROJECTS.map((p) => ({ label: p.title, href: `/projets/${p.slug}/` }))
  },
  { label: "Plaquette de formation", href: "/plaquette-formation/" },
  {
    label: "Contact",
    href: "/contact/",
    items: [
      { label: "Me contacter", href: "/contact/" },
      { label: "Mon CV", href: "/contact/cv/" },
      { label: "Liens", href: "/contact/liens/" }
    ]
  }
];

export function sameRoute(a: string, b: string) {
  const norm = (p: string) => p.replace(/\/+$/, "") || "/";
  return norm(a) === norm(b);
}
