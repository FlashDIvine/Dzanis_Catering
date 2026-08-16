"use client";

import { pricing } from "@/data/pricing";
import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Container id="harga" className="bg-light-bg">
      <SectionHeading
        badge="Harga"
        title={
          <>
            Mulai dari <em className="italic text-accent-dark">Rp18.000/pax</em>
          </>
        }
        description="Fix price, transparan, tidak ada biaya kejutan. Semua paket sudah termasuk ongkir untuk area layanan kami."
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
        {pricing.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className={cn(
              "bg-white rounded-[18px] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_32px_rgba(26,91,150,0.1)] hover:-translate-y-1",
              pkg.isFeatured
                ? "border-[1.5px] border-primary shadow-[0_6px_24px_rgba(26,91,150,0.12)]"
                : "border border-primary/10"
            )}
          >
            <div>
              <div className="text-[0.75rem] font-bold uppercase tracking-[1px] text-text-light mb-3">
                {pkg.name}
              </div>

              <div className="font-serif text-[2.1rem] font-bold text-primary leading-none mb-1">
                {pkg.price}
              </div>

              <div className="text-[0.76rem] text-text-light mb-3">
                {pkg.unit}
              </div>

              <div className="h-[1px] bg-primary/[0.08] mb-3" />
            </div>

            <p className="text-[0.8rem] text-text-mid leading-[1.65]">
              {pkg.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Centered CTA */}
      <div className="text-center mt-10">
        <a
          href={company.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white rounded-full font-semibold text-[0.92rem] shadow-[0_6px_22px_rgba(26,91,150,0.22)] transition-all duration-200 hover:bg-primary-dark hover:-translate-y-0.5"
        >
          Minta Penawaran Lengkap →
        </a>
        <p className="text-[0.76rem] text-text-light mt-2.5">
          Gratis konsultasi · Gratis food tasting · Harga langsung dari kami
        </p>
      </div>
    </Container>
  );
}
