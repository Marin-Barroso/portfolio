"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/data/content";

const field =
  "w-full rounded-xl border border-white/25 bg-white/[0.07] px-4 py-3 text-fg placeholder:text-soft/80 focus:border-aqua focus:outline-none";

// Le site est statique (GitHub Pages) : l'envoi passe par FormSubmit, qui transfère le message
// par email. Le premier envoi déclenche un email d'activation à confirmer une seule fois.
const ENDPOINT = `https://formsubmit.co/ajax/${content.contact.email}`;

type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Alternance");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fallback, setFallback] = useState(false);

  const fullSubject = `${subject} – Portfolio de Marin Barroso`;
  const body = `${message}\n\n${name}${email ? ` (${email})` : ""}`;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honey) return;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: fullSubject,
          _replyto: email,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || String(data?.success) !== "true") throw new Error(data?.message || "Envoi impossible");
      setStatus("sent");
    } catch {
      setStatus("idle");
      setFallback(true);
    }
  };

  if (status === "sent") {
    return (
      <div className="glass max-w-xl p-6" role="status">
        <p className="text-gradient text-2xl font-extrabold">Message envoyé</p>
        <p className="mt-2 text-fg">Merci {name}, je te réponds dès que possible à l&apos;adresse {email}.</p>
        <button
          type="button"
          className="btn-ghost mt-5"
          onClick={() => {
            setMessage("");
            setStatus("idle");
          }}
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={onSubmit} className="grid max-w-xl gap-4">
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold">Ton nom</span>
          <input required value={name} onChange={(e) => setName(e.target.value)} className={field} autoComplete="name" />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold">Ton email</span>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} autoComplete="email" />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold">Sujet</span>
          <select value={subject} onChange={(e) => setSubject(e.target.value)} className={`${field} [&>option]:bg-panel`}>
            <option>Alternance</option>
            <option>Stage</option>
            <option>Question sur un projet</option>
            <option>Autre</option>
          </select>
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold">Message</span>
          <textarea
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={content.contact.emailBody}
            className={field}
          />
        </label>
        {/* Piège à robots : invisible pour les visiteurs */}
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
          className="hidden"
          aria-hidden="true"
        />
        <div>
          <button type="submit" className="btn-neon disabled:opacity-60" disabled={status === "sending"}>
            {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
          </button>
        </div>
      </form>
      {fallback && <MailChooser subject={fullSubject} body={body} onClose={() => setFallback(false)} />}
    </>
  );
}

function MailChooser({ subject, body, onClose }: { subject: string; body: string; onClose: () => void }) {
  const to = content.contact.email;
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  const [copied, setCopied] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const options = [
    { label: "Gmail", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${s}&body=${b}` },
    { label: "Outlook", href: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${s}&body=${b}` },
    { label: "Yahoo Mail", href: `https://compose.mail.yahoo.com/?to=${to}&subject=${s}&body=${b}` },
    { label: "Application de messagerie", href: `mailto:${to}?subject=${s}&body=${b}` },
  ];

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="mail-chooser-title"
        className="w-full max-w-md rounded-2xl border border-white/15 bg-panel p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="mail-chooser-title" className="text-xl font-extrabold">
          Choisis ta messagerie
        </h2>
        <p className="mt-2 text-sm text-soft">L&apos;envoi direct n&apos;a pas fonctionné. Ton message est prêt, il suffit de l&apos;envoyer depuis ta messagerie.</p>
        <ul className="mt-5 grid gap-2">
          {options.map((o) => (
            <li key={o.label}>
              <a
                href={o.href}
                target={o.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block rounded-xl border border-white/20 px-4 py-3 font-semibold text-fg hover:border-aqua hover:bg-white/5"
              >
                {o.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            className="text-sm text-aqua underline underline-offset-4"
            onClick={async () => {
              await navigator.clipboard.writeText(to);
              setCopied(true);
            }}
          >
            {copied ? "Adresse copiée" : `Copier ${to}`}
          </button>
          <button ref={closeRef} type="button" className="btn-ghost !py-2" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
