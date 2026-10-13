import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Card, PageShell } from "@/components/ui";
import { content } from "@/data/content";

export const metadata: Metadata = { title: "Me contacter" };

export default function ContactPage() {
  const { contact } = content;
  const whatsapp = `https://wa.me/${contact.phoneInternational}?text=${encodeURIComponent(contact.whatsappMessage)}`;
  return (
    <PageShell
      crumbs={[{ label: "Contact" }, { label: "Me contacter" }]}
      title="Me contacter"
      intro="Une alternance, un stage ou une question sur un projet : écris-moi."
    >
      <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
        <ContactForm />
        <Card className="h-fit">
          <p className="label-mono mb-3">En direct</p>
          <ul className="grid gap-3">
            <li>
              <a href={`mailto:${contact.email}`} className="text-aqua underline underline-offset-4">
                {contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phoneInternational}`} className="text-aqua underline underline-offset-4">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="text-aqua underline underline-offset-4">
                WhatsApp
              </a>
            </li>
            <li className="text-soft">
              {contact.city} · {contact.license}
            </li>
          </ul>
        </Card>
      </div>
    </PageShell>
  );
}
