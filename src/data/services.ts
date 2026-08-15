export type Service = {
  id: string;
  categoryNumber: string;
  categoryTag: string;
  title: string;
  description: string;
  image: string;
  linkText: string;
  linkHref: string;
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
    linkText: "Lihat paket →",
    linkHref: "#paket",
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
    linkText: "Lihat paket →",
    linkHref: "#paket",
  },
  {
    id: "service-3",
    categoryNumber: "03",
    categoryTag: "Hidangan Spesial",
    title: "Kambing Guling",
    description:
      "Show & disajikan di tempat. Hidangan paling istimewa untuk momen kebersamaan yang tak terlupakan.",
    image: "/images/services/kambing-guling.jpg",
    linkText: "Tanya harga →",
    linkHref: "https://wa.me/6281286803447?text=Halo%20Dzanis%20Katering%2C%20saya%20mau%20tanya%20paket%20kambing%20guling.",
  },
  {
    id: "service-4",
    categoryNumber: "04",
    categoryTag: "Khas Sunda",
    title: "Liwetan",
    description:
      "Sajian khas Sunda di atas daun pisang — dinikmati lesehan bersama keluarga. Hangat dan tak terlupakan.",
    image: "/images/services/liwetan.jpg",
    linkText: "Tanya harga →",
    linkHref: "https://wa.me/6281286803447?text=Halo%20Dzanis%20Katering%2C%20saya%20mau%20tanya%20paket%20liwetan.",
  },
  {
    id: "service-5",
    categoryNumber: "05",
    categoryTag: "Perayaan",
    title: "Nasi Tumpeng",
    description:
      "Untuk ulang tahun, selamatan, dan acara kantor. Tersedia tampah dan tumpeng mini.",
    image: "/images/services/tumpeng.jpg",
    linkText: "Lihat paket →",
    linkHref: "#paket",
  },
  {
    id: "service-6",
    categoryNumber: "06",
    categoryTag: "Pelengkap",
    title: "Snack & Coffee Break",
    description:
      "Aneka snack dan coffee break — dari Rp18.000/pax. Cocok untuk seminar dan gathering.",
    image: "/images/services/snack.jpg",
    linkText: "Lihat paket →",
    linkHref: "#paket",
  },
];
