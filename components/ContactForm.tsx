"use client";

import { useState } from "react";
import { content } from "@/data/content";

const field =
  "w-full rounded-xl border border-white/25 bg-white/[0.07] px-4 py-3 text-fg placeholder:text-soft/80 focus:border-aqua focus:outline-none";

// Le site est statique : le formulaire prépare un email dans la messagerie du visiteur
export default function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("Alternance");
  const [message, setMessage] = useState(content.contact.emailBody);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${message}\n\n${name}`;
    window.location.href = `mailto:${content.contact.email}?subject=${encodeURIComponent(
      `${subject} – Portfolio de Marin Barroso`
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={onSubmit} className="grid max-w-xl gap-4">
      <label className="grid gap-1.5">
        <span className="text-sm font-semibold">Ton nom</span>
        <input required value={name} onChange={(e) => setName(e.target.value)} className={field} autoComplete="name" />
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
        <textarea required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className={field} />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-neon">
          Envoyer par email
        </button>
        <span className="text-sm text-soft">Ouvre ta messagerie avec le message prérempli.</span>
      </div>
    </form>
  );
}
