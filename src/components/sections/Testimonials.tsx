"use client";

import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <Container id="testimoni" className="bg-[#FDFCFE]">
      {/* Header with Split Rating Block */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <SectionHeading
          badge="Testimoni"
          title={
            <>
              Kata Mereka yang <em className="italic text-[#5E8E22]">Sudah Merasakan</em>
            </>
          }
        />

        <div className="text-left md:text-right shrink-0">
          <div className="text-[#F5A623] text-lg tracking-[3px] mb-1">★★★★★</div>
          <strong className="block font-serif text-4xl font-bold text-[#5A1F50] leading-none mb-1">
            4.9
          </strong>
          <span className="text-[0.76rem] text-[#9B7A96]">dari ratusan ulasan Google</span>
        </div>
      </div>

      {/* 3x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {testimonials.map((testi, index) => (
          <motion.div
            key={testi.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className={cn(
              "rounded-[20px] p-6.5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(123,45,110,0.12)]",
              testi.isDark
                ? "bg-gradient-to-br from-[#5A1F50] to-[#3D1238] border border-[#7DB832]/15 shadow-[0_2px_16px_rgba(123,45,110,0.1)]"
                : "bg-white border border-[#7B2D6E]/10 shadow-[0_2px_16px_rgba(123,45,110,0.06)]"
            )}
          >
            <div>
              <div
                className={cn(
                  "font-serif text-[2.4rem] leading-none mb-2.5",
                  testi.isDark ? "text-[#7DB832]/30" : "text-[#7DB832]"
                )}
              >
                &ldquo;
              </div>

              <p
                className={cn(
                  "text-[0.86rem] leading-[1.82] mb-4",
                  testi.isDark ? "text-white/60" : "text-[#5A3D56]"
                )}
              >
                {testi.content}
              </p>
            </div>

            <div
              className={cn(
                "flex items-center gap-3 pt-3.5 border-t",
                testi.isDark ? "border-white/[0.08]" : "border-[#7B2D6E]/[0.08]"
              )}
            >
              <div
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center font-bold text-[0.78rem] shrink-0",
                  testi.isDark
                    ? "bg-[#7DB832]/15 text-[#9ED44F]"
                    : "bg-[#F7EFF6] text-[#7B2D6E]"
                )}
              >
                {testi.initials}
              </div>

              <div>
                <strong
                  className={cn(
                    "block text-[0.83rem] leading-tight mb-0.5",
                    testi.isDark ? "text-white" : "text-[#1E0C1B]"
                  )}
                >
                  {testi.name}
                </strong>
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-[0.7rem]",
                      testi.isDark ? "text-white/35" : "text-[#9B7A96]"
                    )}
                  >
                    {testi.source} · {testi.date}
                  </span>
                  <span className="text-[#F5A623] text-[0.7rem] tracking-wider">
                    ★★★★★
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
