export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "Apakah bisa melakukan food tasting sebelum memesan?",
    answer:
      "Tentu saja! Kami menyediakan layanan gratis food tasting yang dapat kami antarkan langsung ke alamat Anda sebelum hari H tanpa dipungut biaya apapun.",
  },
  {
    id: "faq-2",
    question: "Berapa minimal pemesanan untuk masing-masing paket?",
    answer:
      "Untuk Nasi Box dan Snack Box minimal pemesanan 20–30 pax. Untuk paket Prasmanan minimal pemesanan 50 pax. Untuk paket Kambing Guling dapat dipesan mulai dari 1 ekor.",
  },
  {
    id: "faq-3",
    question: "Apakah harga yang tertera sudah termasuk peralatan & pramusaji?",
    answer:
      "Ya, untuk paket Prasmanan sudah lengkap termasuk meja buffet, pemanas roll top, piring/alat makan, dekorasi meja saji, dan staf pramusaji profesional selama acara.",
  },
  {
    id: "faq-4",
    question: "Bagaimana sistem pembayaran dan pelunasannya?",
    answer:
      "Pemesanan diikat dengan DP (Down Payment) sebesar 30%–50% saat konfirmasi tanggal. Pelunasan dapat dilakukan H-3 sebelum acara atau saat pengantaran sesuai kesepakatan.",
  },
  {
    id: "faq-5",
    question: "Apakah menu catering bisa disesuaikan (custom menu)?",
    answer:
      "Sangat bisa. Kami sangat fleksibel dalam menyesuaikan pilihan lauk, sayur, sambal, hidangan penutup, hingga menyesuaikan preferensi budget atau tema acara Anda.",
  },
];
