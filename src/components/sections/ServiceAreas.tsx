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
        title={
          <>
            Melayani <em className="italic text-accent-dark">Puncak, Bogor & Jabodetabek</em>
          </>
        }
        description="Kami siap melayani kebutuhan konsumsi acara Anda dengan pengiriman tepat waktu langsung ke lokasi."
      />

      <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {company.serviceAreas.map((area, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={cn(
              "rounded-2xl p-5.5 border transition-all duration-300 hover:shadow-[0_8px_28px_rgba(26,91,150,0.1)] hover:-translate-y-1",
              area.isPrimary
                ? "bg-primary-pale border-primary/25"
                : "bg-white border-primary/10"
            )}
          >
            <span
              className={cn(
                "inline-block text-[0.67rem] font-bold px-2.5 py-0.5 rounded-full mb-2.5",
                area.isPrimary
                  ? "bg-primary text-white"
                  : "bg-accent-pale text-accent-dark"
              )}
            >
              {area.type}
            </span>

            <div className="font-serif text-[1.1rem] font-semibold text-primary-dark mb-1.5">
              {area.name}
            </div>

            <div className="text-[0.8rem] text-text-mid leading-[1.75]">
              {area.cities}
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
