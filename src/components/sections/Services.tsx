"use client";

import { services } from "@/data/services";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  const featuredService = services[0]; // Prasmanan
  const secondaryService = services[1]; // Nasi Box
  const otherServices = services.slice(2); // Kambing Guling, Liwetan, Tumpeng, Snack

  return (
    <Container id="layanan" className="bg-warm-white">
      <SectionHeading
        badge="Layanan Catering Dzanis"
        title="Pilihan Menu & Layanan Catering"
        description="Dari prasmanan pesta pernikahan, nasi box rapat kantor, hingga hidangan spesial kambing guling & liwetan — siap diantar hangat ke lokasi acara Anda di Ciayumajakuning."
      />

      <div className="mt-12 space-y-6">
        {/* Top Row: Editorial Asymmetric Feature (Prasmanan + Nasi Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Service (Prasmanan) - 7 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 group relative rounded-2xl overflow-hidden min-h-[360px] sm:min-h-[420px] flex flex-col justify-end shadow-sm hover:shadow-xl transition-all duration-500 border border-primary/10"
          >
            <Image
              src={featuredService.image}
              alt={featuredService.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.88] saturate-[1.05]"
            />
            {/* Editorial Multi-stop Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/95 via-primary-deep/45 to-transparent" />

            <div className="relative z-10 p-6 sm:p-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-[0.7rem] font-bold uppercase tracking-wider mb-3">
                <span>{featuredService.categoryNumber}</span>
                <span>·</span>
                <span>{featuredService.categoryTag}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                {featuredService.title}
              </h3>

              <p className="text-white/80 text-[0.9rem] sm:text-[0.95rem] leading-[1.6] max-w-[500px] mb-4">
                {featuredService.description}
              </p>

              <a
                href={featuredService.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-white/15 hover:bg-[#25D366] hover:text-white backdrop-blur-xs px-4 py-2 rounded-full transition-all duration-200"
              >
                <span>{featuredService.linkText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Secondary Service (Nasi Box) - 5 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 group relative rounded-2xl overflow-hidden min-h-[360px] sm:min-h-[420px] flex flex-col justify-end shadow-sm hover:shadow-xl transition-all duration-500 border border-primary/10"
          >
            <Image
              src={secondaryService.image}
              alt={secondaryService.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.88] saturate-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/95 via-primary-deep/45 to-transparent" />

            <div className="relative z-10 p-6 sm:p-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-white text-[0.7rem] font-bold uppercase tracking-wider mb-3">
                <span>{secondaryService.categoryNumber}</span>
                <span>·</span>
                <span>{secondaryService.categoryTag}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                {secondaryService.title}
              </h3>

              <p className="text-white/80 text-[0.9rem] leading-[1.6] max-w-[420px] mb-4">
                {secondaryService.description}
              </p>

              <a
                href={secondaryService.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-white/15 hover:bg-[#25D366] hover:text-white backdrop-blur-xs px-4 py-2 rounded-full transition-all duration-200"
              >
                <span>{secondaryService.linkText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: 4 Specialty Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + idx * 0.06 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] flex flex-col justify-end shadow-sm hover:shadow-xl transition-all duration-500 border border-primary/10"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.88] saturate-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/95 via-primary-deep/45 to-transparent" />

              <div className="relative z-10 p-5 sm:p-6 flex flex-col items-start">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-xs text-white text-[0.65rem] font-bold uppercase tracking-wider mb-2">
                  <span>{service.categoryNumber}</span>
                  <span>·</span>
                  <span>{service.categoryTag}</span>
                </div>

                <h4 className="font-serif text-xl font-bold text-white mb-1.5 tracking-tight">
                  {service.title}
                </h4>

                <p className="text-white/75 text-[0.8rem] leading-[1.55] mb-3 line-clamp-3">
                  {service.description}
                </p>

                <a
                  href={service.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[0.82rem] font-semibold text-accent-light group-hover:text-white transition-colors"
                >
                  <span>{service.linkText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
