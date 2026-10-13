"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV, PDF_NAME, PDF_URL, sameRoute } from "@/lib/site";

function Chevron() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<number | null>(null);
  const [drawer, setDrawer] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Ferme menus et tiroir à chaque changement de page
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(null);
    setDrawer(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setDrawer(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const inSection = (i: number) => {
    const s = NAV[i];
    return s.items ? s.items.some((it) => sameRoute(it.href, pathname)) : sameRoute(s.href, pathname);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/15 bg-ink/80 backdrop-blur-md">
      <nav ref={navRef} aria-label="Navigation principale" className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="mr-auto whitespace-nowrap text-lg font-extrabold tracking-tight">
          Marin Barroso
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV.map((s, i) =>
            s.items ? (
              <li key={s.label} className="relative">
                <button
                  type="button"
                  aria-expanded={open === i}
                  aria-haspopup="true"
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/10 ${
                    inSection(i) ? "text-white underline decoration-aqua decoration-2 underline-offset-8" : "text-soft"
                  }`}
                >
                  {s.label}
                  <Chevron />
                </button>
                {open === i && (
                  <ul className="absolute left-0 top-full mt-2 grid min-w-64 gap-0.5 rounded-2xl border border-white/15 bg-panel p-2 shadow-2xl shadow-black/60">
                    {s.items.map((it, j) => (
                      <li key={it.href}>
                        {s.label === "Missions" && j === 1 && <div className="mx-2 my-1 h-px bg-white/15" />}
                        <Link
                          href={it.href}
                          aria-current={sameRoute(it.href, pathname) ? "page" : undefined}
                          className="block rounded-xl px-3 py-2 text-sm text-fg hover:bg-white/10 aria-[current=page]:bg-white/10 aria-[current=page]:text-aqua"
                        >
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={s.label}>
                <Link
                  href={s.href}
                  aria-current={inSection(i) ? "page" : undefined}
                  className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-soft hover:bg-white/10 aria-[current=page]:text-white aria-[current=page]:underline aria-[current=page]:decoration-aqua aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
                >
                  {s.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <a href={PDF_URL} download={PDF_NAME} className="btn-neon whitespace-nowrap !px-4 !py-2 text-sm">
          <span aria-hidden="true">⬇</span> PDF
        </a>

        <button
          type="button"
          className="rounded-full border border-white/25 p-2 xl:hidden"
          aria-expanded={drawer}
          aria-controls="menu-mobile"
          aria-label={drawer ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setDrawer(!drawer)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {drawer ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {drawer && (
        <div id="menu-mobile" className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-white/15 bg-panel px-4 pb-6 pt-2 xl:hidden">
          {NAV.map((s) => (
            <div key={s.label} className="border-b border-white/10 py-3">
              {s.items ? (
                <>
                  <p className="label-mono mb-1">{s.label}</p>
                  <ul>
                    {s.items.map((it) => (
                      <li key={it.href}>
                        <Link
                          href={it.href}
                          aria-current={sameRoute(it.href, pathname) ? "page" : undefined}
                          className="block py-1.5 text-fg aria-[current=page]:text-aqua"
                        >
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={s.href} className="block font-semibold text-fg">
                  {s.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
