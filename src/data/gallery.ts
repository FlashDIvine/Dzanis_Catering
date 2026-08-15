export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  isTall?: boolean;
};

export const gallery: GalleryImage[] = [
  {
    id: "img-1",
    src: "/images/gallery/galeri-1.jpg",
    alt: "Besek Nusantara Dzanis Katering",
    isTall: true,
  },
  {
    id: "img-2",
    src: "/images/gallery/galeri-2.jpg",
    alt: "Nasi Box Reguler A",
  },
  {
    id: "img-3",
    src: "/images/gallery/galeri-3.jpg",
    alt: "Ricebowl Spesial",
  },
  {
    id: "img-4",
    src: "/images/gallery/galeri-4.jpg",
    alt: "Nasi Box Ekonomis",
  },
  {
    id: "img-5",
    src: "/images/gallery/galeri-5.jpg",
    alt: "Tumpeng Mini Perayaan",
  },
  {
    id: "img-6",
    src: "/images/gallery/galeri-6.jpg",
    alt: "Besek Nusantara Tradisional",
  },
  {
    id: "img-7",
    src: "/images/gallery/galeri-7.jpg",
    alt: "Nasi Box Reguler B",
  },
  {
    id: "img-8",
    src: "/images/gallery/galeri-8.jpg",
    alt: "Ricebowl Menu B",
  },
  {
    id: "img-9",
    src: "/images/gallery/galeri-9.jpg",
    alt: "Nasi Box Ekonomis B",
  },
];
