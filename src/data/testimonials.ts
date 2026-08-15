export type Testimonial = {
  id: string;
  name: string;
  initials: string;
  source: string;
  date: string;
  content: string;
  rating: number;
  isDark?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "testi-1",
    name: "Fadil Binnur",
    initials: "FB",
    source: "Google Reviews",
    date: "Jul 2025",
    content:
      "Rihlah keluarga 100 pax, paket 3x makan yang dicustom. Masakan oke, penataan oke, pelayanan oke dengan harga terjangkau, serta komunikasi yang baik dengan CS. Sukses selalu Dzanis Katering!",
    rating: 5,
    isDark: true,
  },
  {
    id: "testi-2",
    name: "Abi Wahid",
    initials: "AW",
    source: "Google Reviews",
    date: "Jun 2025",
    content:
      "Pesen catering untuk menginap di villa sekitar Puncak Cisarua. Makanan enak, datang ontime malah kecepetan dari jadwalnya. Pokonya ga nyesel pesen catering di sini.",
    rating: 5,
  },
  {
    id: "testi-3",
    name: "Hugo Asmoro",
    initials: "HA",
    source: "Google Reviews",
    date: "Feb 2026",
    content:
      "One of the best caterers in the region. Definitely worth every penny. Will buy from them again, totally satisfied with their service and food. What an amazing experience!",
    rating: 5,
  },
  {
    id: "testi-4",
    name: "Yunika Aprillia",
    initials: "YA",
    source: "Google Reviews",
    date: "Feb 2026",
    content:
      "Admin dan pramusajinya ramah-ramah, makanannya enak bgt gaada yang gagal, pokoknya besttt!! ❤️",
    rating: 5,
  },
  {
    id: "testi-5",
    name: "Natalia Liu",
    initials: "NL",
    source: "Google Reviews",
    date: "Jun 2025",
    content:
      "Catering andalan untuk acara sekolah anak ku, sudah 2 angkatan selalu memakai jasa Dzanis. Anak-anak sangat suka dan lahap makanannya. TOP banget pokoknya!",
    rating: 5,
  },
  {
    id: "testi-6",
    name: "Imas Nurhidayah",
    initials: "IM",
    source: "Google Reviews",
    date: "Feb 2026",
    content:
      "Makanannya enak fresh, tepat waktu. Kalau ke Puncak pasti pesen ke sini lagi. Rekomen banget dan sangat worth it!",
    rating: 5,
  },
];
