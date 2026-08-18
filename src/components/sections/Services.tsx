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
        title="Menu untuk semua jenis acara"
        description="Dari sarapan pagi harian hingga pesta pernikahan — kami hadir dengan pilihan menu yang sesuai kebutuhan dan anggaran Anda."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => {
          const isWide = service.isWide;
          const isExternal = service.linkHref.startsWith("http");
          const CardTag = isExternal ? "a" : Link;
          const linkProps = isExternal
            ? { href: service.linkHref, target: "_blank", rel: "noopener noreferrer" }
            : { href: service.linkHref };

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={cn(isWide && "sm:col-span-2 md:col-span-2")}
            >
              <CardTag
                {...linkProps}
                className="group block"
              >
                {/* Food photograph — bright and appetizing */}
                <div
                  className={cn(
                    "relative overflow-hidden rounded-xl",
                    isWide ? "aspect-[16/10] md:aspect-[16/9]" : "aspect-[4/3]"
                  )}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/45 to-transparent" />
                  <span className="absolute left-4 top-4 text-[0.62rem] font-semibold uppercase tracking-[1.5px] text-white/90">
                    {service.categoryTag}
                  </span>
                </div>

                {/* Caption sits below the image — content, not chrome */}
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-primary-dark">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-[0.85rem] leading-[1.7] text-text-mid">
                      {service.description}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 text-accent-dark transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </CardTag>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
}
