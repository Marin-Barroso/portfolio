"use client";

import { useState, useEffect } from "react";
import { content } from "@/data/content";

export default function MessageModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const encodedSubject = encodeURIComponent(content.contact.emailSubject);
  const encodedBody = encodeURIComponent(content.contact.emailBody);
  const encodedWhatsApp = encodeURIComponent(content.contact.whatsappMessage);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${content.contact.email}&su=${encodedSubject}&body=${encodedBody}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${content.contact.email}&subject=${encodedSubject}&body=${encodedBody}`;
  const yahooUrl = `https://compose.mail.yahoo.com/?to=${content.contact.email}&subject=${encodedSubject}&body=${encodedBody}`;
  const mailtoUrl = `mailto:${content.contact.email}?subject=${encodedSubject}&body=${encodedBody}`;
  const whatsappUrl = `https://wa.me/${content.contact.phoneInternational}?text=${encodedWhatsApp}`;
  const smsUrl = `sms:${content.contact.phoneInternational}?body=${encodedWhatsApp}`;

  const copyEmail = () => {
    navigator.clipboard.writeText(content.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Contacter Marin Barroso",
          text: `${content.contact.emailSubject}\n\n${content.contact.emailBody}`,
        });
      } catch (err) {
        console.log("Share canceled");
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-barlow font-bold text-2xl text-anthracite">Écrire à Marin</h3>
            <button onClick={onClose} className="text-anthracite/60 hover:text-anthracite">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-anthracite/10 rounded-lg hover:border-cyan/30 transition-colors">
              <span className="text-2xl">📧</span>
              <span className="font-medium text-anthracite">Gmail</span>
            </a>

            <a href={outlookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-anthracite/10 rounded-lg hover:border-cyan/30 transition-colors">
              <span className="text-2xl">📧</span>
              <span className="font-medium text-anthracite">Outlook</span>
            </a>

            <a href={yahooUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-anthracite/10 rounded-lg hover:border-cyan/30 transition-colors">
              <span className="text-2xl">📧</span>
              <span className="font-medium text-anthracite">Yahoo Mail</span>
            </a>

            <a href={mailtoUrl} className="flex items-center gap-3 p-4 border border-anthracite/10 rounded-lg hover:border-cyan/30 transition-colors">
              <span className="text-2xl">📱</span>
              <span className="font-medium text-anthracite">App mail par défaut</span>
            </a>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-anthracite/10 rounded-lg hover:border-cyan/30 transition-colors">
              <span className="text-2xl">💬</span>
              <span className="font-medium text-anthracite">WhatsApp</span>
            </a>

            <a href={smsUrl} className="flex items-center gap-3 p-4 border border-anthracite/10 rounded-lg hover:border-cyan/30 transition-colors">
              <span className="text-2xl">💬</span>
              <span className="font-medium text-anthracite">SMS</span>
            </a>

            <button onClick={copyEmail} className="flex items-center gap-3 p-4 border border-anthracite/10 rounded-lg hover:border-cyan/30 transition-colors">
              <span className="text-2xl">📋</span>
              <span className="font-medium text-anthracite">{copied ? "Adresse copiée ✓" : "Copier l'adresse e-mail"}</span>
            </button>

            {false && (
              <button onClick={handleShare} className="flex items-center gap-3 p-4 border border-anthracite/10 rounded-lg hover:border-cyan/30 transition-colors">
                <span className="text-2xl">📤</span>
                <span className="font-medium text-anthracite">Autres applications</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
