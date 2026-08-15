"use client";

import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ServiceAreas() {
  return (
    <Container id="area" className="bg-[#FDFCFE]">
      <SectionHeading
        badge="Area Layanan"
        title={
          <>
            Melayani <em className="italic text-[#5E8E22]">Puncak, Bogor & Jabodetabek</em>
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
              "rounded-2xl p-5.5 border transition-all duration-300 hover:shadow-[0_8px_28px_rgba(123,45,110,0.1)] hover:-translate-y-1",
              area.isPrimary
                ? "bg-[#F7EFF6] border-[#7B2D6E]/20"
                : "bg-white border-[#7B2D6E]/10"
            )}
          >
            <span
              className={cn(
                "inline-block text-[0.67rem] font-bold px-2.5 py-0.5 rounded-full mb-2.5",
                area.isPrimary
                  ? "bg-[#7B2D6E] text-white"
                  : "bg-[#EFF7E4] text-[#5E8E22]"
              )}
            >
              {area.type}
            </span>

            <div className="font-serif text-[1.1rem] font-semibold text-[#5A1F50] mb-1.5">
              {area.name}
            </div>

            <div className="text-[0.8rem] text-[#5A3D56] leading-[1.75]">
              {area.cities}
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
