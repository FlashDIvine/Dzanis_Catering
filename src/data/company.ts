export const getWhatsAppLink = (
  message: string = "Halo Niezar, saya butuh informasi lengkap paket dan harga. Bisa dibantu?"
) => {
  return `https://wa.me/6285726331579?text=${encodeURIComponent(message)}`;
};

export const company = {
  name: "Dzanis Catering",
  brandName: "Dzanis Catering",
  legalName: "PT Dzanis Catering Indonesia",
  logo: "/images/brand/dzanis-logo.png",
  logoLight: "/images/brand/dzanis-logo-light.png",
  tagline: "Jasa Catering Ciayumajakuning (Cirebon, Indramayu, Majalengka, Kuningan) — Halal MUI",
  description:
    "Dzanis Catering menyediakan nasi box, prasmanan, snack, kambing guling & liwetan untuk acara di wilayah Ciayumajakuning (Cirebon, Indramayu, Majalengka, Kuningan). Halal MUI, gratis ongkir, tepat waktu sejak 2013.",
  establishedYear: 2013,
  contact: {
    whatsapp: "085726331579",
    whatsappLink: getWhatsAppLink("Halo Niezar, saya butuh informasi lengkap paket dan harga. Bisa dibantu?"),
    phone: "(0251) 829-8060",
    phoneRaw: "02518298060",
    email: "catering@dzanis.com",
    address: "Jl. Raya Puncak KM 77, Cisarua, Bogor, Jawa Barat",
    operatingHours: "Setiap hari · 07.00 – 22.00 WIB",
  },
  stats: {
    experience: "10+",
    experienceLabel: "Tahun",
    events: "3rb+",
    eventsLabel: "Acara/tahun",
    rating: "4.9",
    ratingLabel: "Google",
    onTime: "100%",
    onTimeLabel: "On-time",
  },
  halal: {
    certified: true,
    certNumber: "ID32110022120450525",
    logo: "/images/brand/halal-cert.png",
  },
  socials: {
    instagram: "https://www.instagram.com/dzaniskatering/",
    facebook: "https://facebook.com/dzaniskatering",
  },
  serviceAreas: [
    {
      name: "Cirebon",
      type: "Kota & Kabupaten",
      isPrimary: true,
      cities: "Cirebon Kota · Harjamukti · Kejaksan · Kesambi · Lemahwungkuk · Kedawung · Sumber · Plumbon · Weru · Palimanan · Losari",
    },
    {
      name: "Indramayu",
      type: "Kabupaten",
      isPrimary: true,
      cities: "Indramayu Kota · Jatibarang · Haurgeulis · Karangampel · Patrol · Losarang · Sindang · Balongan · Terisi · Kandanghaur",
    },
    {
      name: "Majalengka",
      type: "Kabupaten",
      isPrimary: true,
      cities: "Majalengka Kota · Jatiwangi · Kadipaten · Kertajati · Talaga · Cigasong · Sumberjaya · Dawuan · Rajagaluh · Sukahaji",
    },
    {
      name: "Kuningan",
      type: "Kabupaten",
      isPrimary: true,
      cities: "Kuningan Kota · Cigugur · Cilimus · Jalaksana · Kramatmulya · Ciawigebang · Luragung · Bandorasa · Darma · Mandirancan",
    },
  ],
};
