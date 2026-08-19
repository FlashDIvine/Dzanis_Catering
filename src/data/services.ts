import { getWhatsAppLink } from "./company";

export type Service = {
  id: string;
  categoryNumber: string;
  categoryTag: string;
  title: string;
  description: string;
  image: string;
  linkText: string;
  linkHref: string;
  whatsappMessage: string;
  isWide?: boolean;
};

export const services: Service[] = [
  {
    id: "service-1",
    categoryNumber: "01",
    categoryTag: "Paling Populer",
    title: "Prasmanan",
    description:
      "Disajikan hangat langsung di lokasi acara Anda. Pilihan terbaik untuk pernikahan, gathering, dan reuni keluarga.",
    image: "/images/services/prasmanan.jpg",
    linkText: "Tanya detail",
    whatsappMessage: "Halo Niezar, saya mau tanya paket prasmanan. Bisa dibantu?",
    linkHref: getWhatsAppLink("Halo Niezar, saya mau tanya paket prasmanan. Bisa dibantu?"),
    isWide: true,
  },
  {
    id: "service-2",
    categoryNumber: "02",
    categoryTag: "Praktis",
    title: "Nasi Box",
    description:
      "Kemasan anti tumpah, food grade. Dari Rp20.000/pax. Cocok untuk rapat, seminar, dan acara kantor.",
    image: "/images/services/nasi-box.jpg",
    linkText: "Tanya detail",
    whatsappMessage: "Halo Niezar, saya mau tanya paket nasi box. Bisa dibantu?",
    linkHref: getWhatsAppLink("Halo Niezar, saya mau tanya paket nasi box. Bisa dibantu?"),
  },
  {
    id: "service-3",
    categoryNumber: "03",
    categoryTag: "Hidangan Spesial",
    title: "Kambing Guling",
    description:
      "Show & disajikan di tempat. Hidangan paling istimewa untuk momen kebersamaan yang tak terlupakan.",
    image: "/images/services/kambing-guling.jpg",
    linkText: "Tanya detail",
    whatsappMessage: "Halo Niezar, saya mau tanya paket kambing guling. Bisa dibantu?",
    linkHref: getWhatsAppLink("Halo Niezar, saya mau tanya paket kambing guling. Bisa dibantu?"),
  },
  {
    id: "service-4",
    categoryNumber: "04",
    categoryTag: "Khas Sunda",
    title: "Liwetan",
    description:
      "Sajian khas Sunda di atas daun pisang — dinikmati lesehan bersama keluarga. Hangat dan tak terlupakan.",
    image: "/images/services/liwetan.jpg",
    linkText: "Tanya detail",
    whatsappMessage: "Halo Niezar, saya mau tanya paket liwetan. Bisa dibantu?",
    linkHref: getWhatsAppLink("Halo Niezar, saya mau tanya paket liwetan. Bisa dibantu?"),
  },
  {
    id: "service-5",
    categoryNumber: "05",
    categoryTag: "Perayaan",
    title: "Nasi Tumpeng",
    description:
      "Untuk ulang tahun, selamatan, dan acara kantor. Tersedia tampah dan tumpeng mini.",
    image: "/images/services/tumpeng.jpg",
    linkText: "Tanya detail",
    whatsappMessage: "Halo Niezar, saya mau tanya paket nasi tumpeng. Bisa dibantu?",
    linkHref: getWhatsAppLink("Halo Niezar, saya mau tanya paket nasi tumpeng. Bisa dibantu?"),
  },
  {
    id: "service-6",
    categoryNumber: "06",
    categoryTag: "Pelengkap",
    title: "Snack & Coffee Break",
    description:
      "Aneka snack dan coffee break — dari Rp18.000/pax. Cocok untuk seminar dan gathering.",
    image: "/images/services/snack.jpg",
    linkText: "Tanya detail",
    whatsappMessage: "Halo Niezar, saya mau tanya paket snack & coffee break. Bisa dibantu?",
    linkHref: getWhatsAppLink("Halo Niezar, saya mau tanya paket snack & coffee break. Bisa dibantu?"),
  },
];
