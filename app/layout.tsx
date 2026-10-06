import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marin Barroso – Portfolio mécanique & préparation auto",
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
    <html lang="fr" className={`${inter.variable} ${barlow.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
