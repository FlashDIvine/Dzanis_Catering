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
  title: `${company.name} | Jasa Catering Puncak, Bogor & Jabodetabek — Halal MUI`,
  description:
    "Dzanis Katering menyediakan nasi box, prasmanan, snack, kambing guling & liwetan untuk acara di Puncak, Bogor, dan Jabodetabek. Halal MUI, gratis ongkir, tepat waktu sejak 2013.",
  keywords: [
    "catering puncak",
    "catering bogor",
    "nasi box",
    "prasmanan",
    "kambing guling",
    "catering halal",
    "catering jabodetabek",
    "dzanis katering",
  ],
  openGraph: {
    title: `${company.name} | Catering Terpercaya Puncak & Jabodetabek`,
    description:
      "Nasi box, prasmanan, snack & kambing guling. Halal MUI, gratis ongkir, tepat waktu sejak 2013.",
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
      <body className="min-h-screen flex flex-col bg-[#FDFCFE] text-[#1E0C1B] antialiased">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
