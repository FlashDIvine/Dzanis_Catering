"use client";

import { services } from "@/data/services";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <Container id="layanan" className="bg-background">
      <SectionHeading
        badge="Layanan Kami"
        title={
          <>
            Menu untuk <em className="italic text-accent-dark">Semua Jenis Acara</em>
          </>
        }
        description="Dari sarapan pagi harian hingga pesta pernikahan — kami hadir dengan pilihan menu yang sesuai kebutuhan dan anggaran Anda."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-[3px] rounded-[20px] overflow-hidden">
        {services.map((service, index) => {
          const isWide = service.isWide;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={cn(
                "relative overflow-hidden group cursor-pointer",
                isWide
                  ? "md:col-span-2 aspect-[4/3] sm:aspect-[16/9] md:aspect-[8/5]"
                  : "aspect-[4/3] sm:aspect-[4/5]"
              )}
            >
              {/* Background Food Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-all duration-700 brightness-[0.65] saturate-75 group-hover:scale-[1.07] group-hover:brightness-[0.4] group-hover:saturate-50"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/95 via-primary-deep/20 to-transparent flex flex-col justify-end p-6 md:p-7 transition-all duration-400 group-hover:from-primary-deep/98 group-hover:via-primary-deep/60 group-hover:to-primary-deep/10">
                <div className="text-accent-light text-[0.65rem] font-bold tracking-[2px] uppercase mb-1.5 opacity-90">
                  {`${service.categoryNumber} · ${service.categoryTag}`}
                </div>

                <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                  {service.title}
                </h3>

                <div className="max-h-0 overflow-hidden transition-all duration-500 opacity-0 group-hover:max-h-28 group-hover:opacity-100">
                  <p className="text-white/60 text-[0.82rem] leading-[1.65]">
                    {service.description}
                  </p>
                </div>

                {service.linkHref.startsWith("http") ? (
                  <a
                    href={service.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent-light hover:text-white text-[0.8rem] font-semibold mt-3 opacity-0 translate-y-2 transition-all duration-350 delay-75 group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    {service.linkText}
                  </a>
                ) : (
                  <Link
                    href={service.linkHref}
                    className="inline-flex items-center gap-1.5 text-accent-light hover:text-white text-[0.8rem] font-semibold mt-3 opacity-0 translate-y-2 transition-all duration-350 delay-75 group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    {service.linkText}
                  </Link>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
}
