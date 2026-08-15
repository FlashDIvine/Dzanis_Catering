export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  unit: string;
  description: string;
  isFeatured?: boolean;
};

export const pricing: PricingPackage[] = [
  {
    id: "pkg-1",
    name: "Snack Box",
    price: "Rp18rb",
    unit: "per pax · mulai dari",
    description: "Reguler & Premium. Cocok untuk seminar, rapat, dan sambutan tamu.",
  },
  {
    id: "pkg-2",
    name: "Nasi Box",
    price: "Rp20rb",
    unit: "per pax · mulai dari",
    description: "6 kategori: Ekonomis, Reguler, Ricebowl, Besek, Luxury, Tumpeng Mini.",
    isFeatured: true,
  },
  {
    id: "pkg-3",
    name: "Coffee Break",
    price: "Rp25rb",
    unit: "per pax · mulai dari",
    description: "Coffee break & rebusan. Tersedia 2 tier harga dengan 3 varian per tier.",
  },
  {
    id: "pkg-4",
    name: "Prasmanan 1x",
    price: "Rp50rb",
    unit: "per pax · mulai dari",
    description: "Buffet O'Tentic & Fussion. Disajikan hangat di lokasi acara Anda.",
  },
  {
    id: "pkg-5",
    name: "Prasmanan 3x Makan",
    price: "Rp90rb",
    unit: "per pax · mulai dari",
    description: "Ekonomis, Reguler & Premium. Sarapan + makan siang + makan malam.",
    isFeatured: true,
  },
  {
    id: "pkg-6",
    name: "Kambing Guling",
    price: "Custom",
    unit: "per paket / per ekor",
    description: "Show & disajikan di tempat. Tanya langsung untuk penawaran terbaik.",
  },
];
