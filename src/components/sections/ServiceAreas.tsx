"use client";

import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ServiceAreas() {
  return (
    <Container id="area" className="bg-background">
      <SectionHeading
        badge="Area Layanan"
        title="Melayani Puncak, Bogor & Jabodetabek"
        description="Kami siap melayani kebutuhan konsumsi acara Anda dengan pengiriman tepat waktu langsung ke lokasi."
      />

      <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {company.serviceAreas.map((area, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="border-t border-line pt-5"
          >
            <span
              className={cn(
                "text-[0.66rem] font-semibold uppercase tracking-[1px]",
                area.isPrimary ? "text-primary" : "text-text-light"
              )}
            >
              {area.type}
            </span>

            <div className="mt-2 font-serif text-[1.15rem] font-semibold text-primary-dark">
              {area.name}
            </div>

            <div className="mt-1.5 text-[0.82rem] leading-[1.75] text-text-mid">
              {area.cities}
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
