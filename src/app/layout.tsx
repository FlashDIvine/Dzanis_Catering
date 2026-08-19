import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { company } from "@/data/company";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${company.name} | Jasa Catering Ciayumajakuning (Cirebon, Indramayu, Majalengka, Kuningan) — Halal MUI`,
  description:
    "Dzanis Catering menyediakan nasi box, prasmanan, snack, kambing guling & liwetan untuk acara di Cirebon, Indramayu, Majalengka, dan Kuningan (Ciayumajakuning). Halal MUI, gratis ongkir, tepat waktu sejak 2013.",
  keywords: [
    "catering ciayumajakuning",
    "catering cirebon",
    "catering indramayu",
    "catering majalengka",
    "catering kuningan",
    "nasi box cirebon",
    "prasmanan cirebon",
    "kambing guling cirebon",
    "catering halal",
    "dzanis catering",
  ],
  openGraph: {
    title: `${company.name} | Catering Terpercaya Ciayumajakuning`,
    description:
      "Nasi box, prasmanan, snack & kambing guling di Cirebon, Indramayu, Majalengka & Kuningan. Halal MUI, gratis ongkir, tepat waktu sejak 2013.",
    url: "https://dzaniskatering.com",
    siteName: company.name,
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${dmSans.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
