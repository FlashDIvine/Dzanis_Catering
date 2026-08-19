"use client";

import { gallery } from "@/data/gallery";
import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Gallery() {
  return (
    <Container id="galeri" className="bg-light-bg">
      <SectionHeading
        badge="Galeri Dokumentasi"
        title="Dokumentasi Hidangan & Momen Acara"
        description="Sekilas tampilan hidangan, packaging higienis, dan momen kebersamaan yang telah kami layani di berbagai villa dan lokasi acara."
      />

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
        {gallery.slice(0, 8).map((img, index) => {
          return (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="relative overflow-hidden rounded-2xl cursor-pointer group aspect-square bg-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 border border-primary/8"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-[0.96]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/40 to-transparent pt-8 pb-3.5 px-3.5 sm:p-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-white text-[0.78rem] sm:text-[0.82rem] font-medium leading-snug drop-shadow-xs">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center">
        <a
          href={company.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 text-primary-dark font-semibold text-[0.9rem] bg-white border border-primary/20 px-7 py-3 rounded-full shadow-xs transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary active:scale-98"
        >
          <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span>Lihat Dokumentasi Lengkap di Instagram</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </Container>
  );
}
