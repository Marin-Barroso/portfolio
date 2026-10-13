import Link from "next/link";
import Reveal from "./Reveal";

export type Crumb = { label: string; href?: string };

export function PageShell({
  crumbs,
  title,
  intro,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-soft">
        <ol className="flex flex-wrap gap-x-2">
          {[{ label: "Accueil", href: "/" }, ...crumbs].map((c, i, all) => (
            <li key={i} className="flex gap-2">
              {c.href && i < all.length - 1 ? (
                <Link href={c.href} className="underline underline-offset-4 hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span aria-current={i === all.length - 1 ? "page" : undefined}>{c.label}</span>
              )}
              {i < all.length - 1 && <span aria-hidden="true">/</span>}
            </li>
          ))}
        </ol>
      </nav>
      <Reveal>
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
        {intro && <p className="mb-8 max-w-2xl text-lg text-soft">{intro}</p>}
      </Reveal>
      <Reveal delay={0.1}>{children}</Reveal>
    </div>
  );
}

export function Card({ children, className = "", hover = false }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return <div className={`glass p-5 ${hover ? "glass-hover" : ""} ${className}`}>{children}</div>;
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-label/60 px-2.5 py-0.5 text-xs text-label">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function KeyValues({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[180px_1fr]">
      {rows.map((r) => (
        <div key={r.label} className="contents">
          <dt className="label-mono pt-0.5">{r.label}</dt>
          <dd className="text-fg">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Todo({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-amber-300/70 bg-amber-300/10 p-5 text-amber-100">
      {children}
    </div>
  );
}

export function PlaquetteButton() {
  return (
    <div className="mt-12 flex justify-center">
      <Link href="/plaquette-formation/" className="btn-neon">
        Plus d&apos;information sur la formation →
      </Link>
    </div>
  );
}
