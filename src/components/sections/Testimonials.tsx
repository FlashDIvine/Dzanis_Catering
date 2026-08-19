"use client";

import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function Testimonials() {
  const featuredTestimonial = testimonials[0]; // Fadil Binnur (100 pax family gathering)
  const secondaryTestimonials = testimonials.slice(1);

  return (
    <Container id="testimoni" className="bg-warm-white">
      {/* Header with Split Rating Block */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pb-8 border-b border-primary/10">
        <SectionHeading
          badge="Ulasan Pelanggan"
          title="Pengalaman Nyata dari Para Pelanggan Kami"
          description="Kepuasan rasa, keramahan pelayanan pramusaji, dan ketepatan waktu pengantaran di setiap acara."
        />

        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-primary/10 shadow-xs shrink-0">
          <div className="font-serif text-4xl font-bold text-primary-deep leading-none">
            4.9
          </div>
          <div>
            <div className="flex items-center gap-0.5 text-gold mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <div className="text-[0.75rem] font-medium text-text-light">
              Berdasarkan ulasan Google
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Featured Testimonial (Spanning 5 columns on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 bg-gradient-to-br from-primary-deep to-primary-dark text-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden"
        >
          <Quote className="w-12 h-12 text-accent/20 absolute top-6 right-6" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-accent-light text-[0.72rem] font-bold uppercase tracking-wider mb-6">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Acara Villa Puncak · 100 Pax</span>
            </div>

            <p className="font-serif text-[1.15rem] sm:text-[1.25rem] leading-[1.65] text-white/90 mb-8 italic">
              &ldquo;{featuredTestimonial.content}&rdquo;
            </p>
          </div>

          <div className="relative z-10 pt-5 border-t border-white/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-accent text-white flex items-center justify-center font-bold text-[0.9rem]">
                {featuredTestimonial.initials}
              </div>
              <div>
                <strong className="block text-[0.95rem] font-semibold text-white">
                  {featuredTestimonial.name}
                </strong>
                <span className="text-[0.75rem] text-white/60">
                  {featuredTestimonial.source} · {featuredTestimonial.date}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-0.5 text-gold-light">
              {[...Array(featuredTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold-light text-gold-light" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Supporting Testimonials (Spanning 7 columns on desktop in a 2-col grid) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {secondaryTestimonials.map((testi, index) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-primary/10 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-0.5 text-gold mb-3">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-[0.88rem] leading-[1.7] text-text-mid mb-5">
                  &ldquo;{testi.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-primary/8 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-pale text-primary font-bold text-[0.8rem] flex items-center justify-center shrink-0">
                  {testi.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <strong className="block text-[0.85rem] font-semibold text-text-main truncate">
                    {testi.name}
                  </strong>
                  <span className="text-[0.72rem] text-text-light block truncate">
                    {testi.source} · {testi.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
