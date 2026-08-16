"use client";

import { gallery } from "@/data/gallery";
import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Gallery() {
  return (
    <Container id="galeri" className="bg-light-bg">
      <SectionHeading
        badge="Galeri"
        title={
          <>
            Foto <em className="italic text-accent-dark">Produk & Acara</em>
          </>
        }
        description="Sekilas tampilan hidangan dan momen kebersamaan yang telah kami layani."
      />

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 rounded-2xl overflow-hidden mb-8">
        {gallery.map((img, index) => {
          const isTall = img.isTall;

          return (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={cn(
                "relative overflow-hidden cursor-pointer group bg-black/5",
                isTall ? "col-span-2 sm:col-span-1 lg:col-span-1 lg:row-span-2 aspect-[4/3] sm:aspect-square lg:aspect-[1/2]" : "aspect-square"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover transition-all duration-500 brightness-90 group-hover:scale-[1.08] group-hover:brightness-100"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="text-center">
        <a
          href={company.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-semibold text-[0.88rem] border-[1.5px] border-primary/20 px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-primary hover:text-white"
        >
          Lihat lebih banyak di Instagram →
        </a>
      </div>
    </Container>
  );
}
