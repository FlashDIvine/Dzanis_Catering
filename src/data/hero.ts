import { company } from "./company";

export const heroData = {
  eyebrow: "Catering Puncak · Bogor · Jabodetabek",
  headline: {
    line1: "Jadikan Setiap",
    accent: "Momen Bersama",
    line2: "Lebih Berkesan",
  },
  description:
    "Nasi box, prasmanan, kambing guling & liwetan — diantar tepat waktu ke villa, venue, atau lokasi acara Anda. Halal MUI, fast response setiap hari.",
  cta: {
    primary: "Chat WhatsApp Sekarang",
    secondary: "Lihat Menu ↓",
    whatsappUrl: company.contact.whatsappLink,
    menuAnchor: "#layanan",
  },
  image: "/images/hero/hero-bg.jpg",
  trustCard: {
    title: `${company.name} — Sejak ${company.establishedYear}`,
    stats: [
      { value: company.stats.experience, label: company.stats.experienceLabel },
      { value: company.stats.events, label: company.stats.eventsLabel },
      { value: `${company.stats.rating}★`, label: company.stats.ratingLabel },
      { value: company.stats.onTime, label: company.stats.onTimeLabel },
    ],
    certifications: [
      {
        title: "Tersertifikasi Halal MUI",
        subtitle: company.halal.certNumber,
        icon: "/images/brand/halal-cert.png",
      },
      {
        title: "Gratis Ongkir",
        subtitle: "Puncak, Bogor & Jabodetabek",
        emoji: "🚚",
      },
    ],
  },
};
