import Link from "next/link";
import { content } from "@/data/content";
import { NAV, PDF_NAME, PDF_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/15 bg-ink/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:grid-cols-7">
        <div>
          <p className="mb-3 font-extrabold">Portfolio PDF</p>
          <a href={PDF_URL} download={PDF_NAME} className="btn-neon !px-4 !py-2 text-sm">
            <span aria-hidden="true">⬇</span> Télécharger le PDF
          </a>
        </div>
        {NAV.filter((s) => s.href !== "/").map((s) => (
          <div key={s.label}>
            <p className="mb-2 font-extrabold">{s.label}</p>
            <ul className="grid gap-1 text-sm">
              {(s.footer ?? s.items ?? [{ label: s.label, href: s.href }]).map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className="text-soft hover:text-white">
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="border-t border-white/10 px-4 py-4 text-center text-sm text-soft">
        © {new Date().getFullYear()} Marin Barroso · {content.contact.email} ·{" "}
        <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
