"use client";

import { pricing } from "@/data/pricing";
import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Container id="harga" className="bg-light-bg scroll-mt-16">
      {/* Anchor helper for #paket link */}
      <span id="paket" className="relative -top-24 block invisible" />

      <SectionHeading
        badge="Paket & Estimasi Harga"
        title="Pilihan Paket Transparan Sesuai Kebutuhan"
        description="Harga pas dan transparan tanpa biaya tersembunyi. Seluruh pesanan disiapkan dengan bahan baku segar dan standar higienis tinggi."
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricing.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className={cn(
              "bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative",
              pkg.isFeatured
                ? "border-2 border-primary shadow-lg shadow-primary/10"
                : "border border-primary/10 shadow-xs"
            )}
          >
            {pkg.isFeatured && (
              <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1 bg-primary text-white text-[0.68rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                <Sparkles className="w-3 h-3" />
                <span>Paling Diminati</span>
              </div>
            )}

            <div>
              <div className="text-[0.78rem] font-bold uppercase tracking-wider text-text-light mb-3">
                {pkg.name}
              </div>

              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-primary-deep tracking-tight">
                  {pkg.price}
                </span>
              </div>

              <div className="text-[0.78rem] font-medium text-text-light mb-4">
                {pkg.unit}
              </div>

              <div className="h-[1px] bg-primary/10 mb-4" />

              <p className="text-[0.88rem] text-text-mid leading-[1.65] mb-6">
                {pkg.description}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={pkg.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200",
                  pkg.isFeatured
                    ? "bg-primary text-white hover:bg-primary-dark shadow-sm"
                    : "bg-primary-pale text-primary-dark hover:bg-primary hover:text-white"
                )}
              >
                <span>Pesan Paket Ini</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hospitality Consultation CTA */}
      <div className="text-center mt-12 max-w-xl mx-auto">
        <a
          href={company.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-primary text-white rounded-full font-semibold text-[0.95rem] shadow-md shadow-primary/20 transition-all duration-200 hover:bg-primary-dark hover:-translate-y-0.5 active:scale-98"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Minta Penawaran & Custom Menu via WA</span>
        </a>
        <p className="text-[0.8rem] text-text-light mt-3">
          Konsultasi anggaran gratis · Gratis food tasting · Penawaran resmi dalam hitungan menit
        </p>
      </div>
    </Container>
  );
}
