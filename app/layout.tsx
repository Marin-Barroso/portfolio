import type { Metadata } from "next";
import { Sora, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Marin Barroso – Portfolio mécanique & préparation auto",
    template: "%s – Marin Barroso",
  },
  description: "Portfolio de Marin Barroso, étudiant en Bachelor Sciences & Ingénierie spécialité Mécanique-production à Arts et Métiers Bordeaux.",
  keywords: ["mécanique automobile", "préparation course", "Arts et Métiers", "CAO", "SolidWorks", "CATIA", "soudure", "restauration moto"],
  authors: [{ name: "Marin Barroso" }],
  openGraph: {
    title: "Marin Barroso – Portfolio mécanique & préparation auto",
    description: "Portfolio de Marin Barroso, étudiant en mécanique automobile à Arts et Métiers Bordeaux",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sora.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
