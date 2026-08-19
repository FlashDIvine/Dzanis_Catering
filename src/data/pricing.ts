import { getWhatsAppLink } from "./company";

export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  unit: string;
  description: string;
  whatsappMessage: string;
  linkHref: string;
  isFeatured?: boolean;
};

export const pricing: PricingPackage[] = [
  {
    id: "pkg-1",
    name: "Snack Box",
    price: "Rp18rb",
    unit: "per pax · mulai dari",
    description: "Reguler & Premium. Cocok untuk seminar, rapat, dan sambutan tamu.",
    whatsappMessage: "Halo Niezar, saya mau tanya paket snack box. Bisa dibantu?",
    linkHref: getWhatsAppLink("Halo Niezar, saya mau tanya paket snack box. Bisa dibantu?"),
  },
  {
    id: "pkg-2",
    name: "Nasi Box",
    price: "Rp20rb",
    unit: "per pax · mulai dari",
    description: "6 kategori: Ekonomis, Reguler, Ricebowl, Besek, Luxury, Tumpeng Mini.",
    whatsappMessage: "Halo Niezar, saya mau tanya paket nasi box. Bisa dibantu?",
    linkHref: getWhatsAppLink("Halo Niezar, saya mau tanya paket nasi box. Bisa dibantu?"),
    isFeatured: true,
  },
  {
    id: "pkg-3",
    name: "Coffee Break",
    price: "Rp25rb",
    unit: "per pax · mulai dari",
    description: "Coffee break & rebusan. Tersedia 2 tier harga dengan 3 varian per tier.",
    whatsappMessage: "Halo Niezar, saya mau tanya paket coffee break. Bisa dibantu?",
    linkHref: getWhatsAppLink("Halo Niezar, saya mau tanya paket coffee break. Bisa dibantu?"),
  },
  {
    id: "pkg-4",
    name: "Prasmanan 1x",
    price: "Rp50rb",
    unit: "per pax · mulai dari",
    description: "Buffet O'Tentic & Fussion. Disajikan hangat di lokasi acara Anda.",
    whatsappMessage: "Halo Niezar, saya mau tanya paket prasmanan 1x. Bisa dibantu?",
    linkHref: getWhatsAppLink("Halo Niezar, saya mau tanya paket prasmanan 1x. Bisa dibantu?"),
  },
  {
    id: "pkg-5",
    name: "Prasmanan 3x Makan",
    price: "Rp90rb",
    unit: "per pax · mulai dari",
    description: "Ekonomis, Reguler & Premium. Sarapan + makan siang + makan malam.",
    whatsappMessage: "Halo Niezar, saya mau tanya paket prasmanan 3x makan. Bisa dibantu?",
    linkHref: getWhatsAppLink("Halo Niezar, saya mau tanya paket prasmanan 3x makan. Bisa dibantu?"),
    isFeatured: true,
  },
  {
    id: "pkg-6",
    name: "Kambing Guling",
    price: "Custom",
    unit: "per paket / per ekor",
    description: "Show & disajikan di tempat. Tanya langsung untuk penawaran terbaik.",
    whatsappMessage: "Halo Niezar, saya mau tanya paket kambing guling. Bisa dibantu?",
    linkHref: getWhatsAppLink("Halo Niezar, saya mau tanya paket kambing guling. Bisa dibantu?"),
  },
];
