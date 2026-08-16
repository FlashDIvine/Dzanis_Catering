"use client";

import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <Container id="testimoni" className="bg-background">
      {/* Header with Split Rating Block */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <SectionHeading
          badge="Testimoni"
          title={
            <>
              Kata Mereka yang <em className="italic text-accent-dark">Sudah Merasakan</em>
            </>
          }
        />

        <div className="text-left md:text-right shrink-0">
          <div className="text-gold text-lg tracking-[3px] mb-1">★★★★★</div>
          <strong className="block font-serif text-4xl font-bold text-primary-dark leading-none mb-1">
            4.9
          </strong>
          <span className="text-[0.76rem] text-text-light">dari ratusan ulasan Google</span>
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
              "rounded-[20px] p-6.5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(26,91,150,0.12)]",
              testi.isDark
                ? "bg-gradient-to-br from-primary-dark to-primary-deep border border-accent/20 shadow-[0_2px_16px_rgba(15,61,110,0.15)]"
                : "bg-white border border-primary/10 shadow-[0_2px_16px_rgba(26,91,150,0.06)]"
            )}
          >
            <div>
              <div
                className={cn(
                  "font-serif text-[2.4rem] leading-none mb-2.5",
                  testi.isDark ? "text-accent/30" : "text-accent"
                )}
              >
                &ldquo;
              </div>

              <p
                className={cn(
                  "text-[0.86rem] leading-[1.82] mb-4",
                  testi.isDark ? "text-white/60" : "text-text-mid"
                )}
              >
                {testi.content}
              </p>
            </div>

            <div
              className={cn(
                "flex items-center gap-3 pt-3.5 border-t",
                testi.isDark ? "border-white/[0.08]" : "border-primary/[0.08]"
              )}
            >
              <div
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center font-bold text-[0.78rem] shrink-0",
                  testi.isDark
                    ? "bg-accent/15 text-accent-light"
                    : "bg-primary-pale text-primary"
                )}
              >
                {testi.initials}
              </div>

              <div>
                <strong
                  className={cn(
                    "block text-[0.83rem] leading-tight mb-0.5",
                    testi.isDark ? "text-white" : "text-foreground"
                  )}
                >
                  {testi.name}
                </strong>
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-[0.7rem]",
                      testi.isDark ? "text-white/35" : "text-text-light"
                    )}
                  >
                    {testi.source} · {testi.date}
                  </span>
                  <span className="text-gold text-[0.7rem] tracking-wider">
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
