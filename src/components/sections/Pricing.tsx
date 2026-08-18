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
        title="Mulai dari Rp18.000 / pax"
        description="Fix price, transparan, tidak ada biaya kejutan. Semua paket sudah termasuk ongkir untuk area layanan kami."
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y divide-line border-y border-line sm:divide-y-0">
        {pricing.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={cn(
              "flex flex-col gap-3 py-7 sm:border-t sm:border-line sm:px-7",
              pkg.isFeatured ? "sm:bg-primary-pale/50" : ""
            )}
          >
            <div className="flex items-center gap-2">
              <span className="text-[0.74rem] font-semibold uppercase tracking-[1px] text-text-mid">
                {pkg.name}
              </span>
              {pkg.isFeatured && (
                <span className="text-[0.62rem] font-semibold uppercase tracking-[1px] text-accent-dark">
                  Populer
                </span>
              )}
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-[2rem] font-semibold text-primary leading-none">
                {pkg.price}
              </span>
              <span className="text-[0.76rem] text-text-light">{pkg.unit}</span>
            </div>

            <p className="text-[0.83rem] leading-[1.7] text-text-mid">
              {pkg.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Centered CTA */}
      <div className="mt-12 flex flex-col items-center gap-3">
        <a
          href={company.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-[0.92rem] font-semibold text-white transition-colors duration-200 hover:bg-primary-dark"
        >
          Minta Penawaran Lengkap →
        </a>
        <p className="text-[0.78rem] text-text-light">
          Gratis konsultasi · Gratis food tasting · Harga langsung dari kami
        </p>
      </div>
    </Container>
  );
}
