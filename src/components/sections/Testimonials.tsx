"use client";

import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <Container id="testimoni" className="bg-background">
      {/* Header with rating summary */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          badge="Testimoni"
          title="Kata mereka yang sudah merasakan"
        />

        <div className="flex items-center gap-3 shrink-0">
          <strong className="font-serif text-4xl font-semibold leading-none text-primary-dark">
            4.9
          </strong>
          <div className="flex flex-col">
            <span className="text-gold text-sm tracking-[2px]">★★★★★</span>
            <span className="text-[0.76rem] text-text-light">
              dari ratusan ulasan Google
            </span>
          </div>
        </div>
      </div>

      {/* Editorial grid — separated by hairlines, no card chrome */}
      <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testi, index) => (
          <motion.figure
            key={testi.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="flex flex-col border-t border-line pt-6"
          >
            <span className="mb-3 text-gold text-[0.8rem] tracking-[2px]">
              ★★★★★
            </span>

            <blockquote className="flex-1 text-[0.95rem] leading-[1.8] text-text-main">
              {testi.content}
            </blockquote>

            <figcaption className="mt-5">
              <span className="block text-[0.88rem] font-semibold text-foreground">
                {testi.name}
              </span>
              <span className="text-[0.76rem] text-text-light">
                {testi.source} · {testi.date}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Container>
  );
}
