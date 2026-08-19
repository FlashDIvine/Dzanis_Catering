"use client";

import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { MapPin, Truck, CheckCircle2 } from "lucide-react";

export function ServiceAreas() {
  return (
    <Container id="area" className="bg-warm-white">
      <SectionHeading
        badge="Wilayah Layanan"
        title="Melayani Wilayah Ciayumajakuning"
        description="Cirebon · Indramayu · Majalengka · Kuningan. Kami melayani kebutuhan catering dengan jaminan pengantaran tepat waktu dan makanan disajikan hangat langsung ke lokasi acara Anda."
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {company.serviceAreas.map((area, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="bg-white rounded-2xl p-6 border border-primary/15 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h4 className="font-serif text-[1.2rem] font-bold text-primary-deep tracking-tight">
                    {area.name}
                  </h4>
                </div>

                <span className="text-[0.68rem] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-primary-pale text-primary-dark">
                  {area.type}
                </span>
              </div>

              <div className="h-[1px] bg-primary/8 mb-3" />

              <p className="text-[0.82rem] text-text-mid leading-[1.65]">
                {area.cities}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[0.72rem] font-semibold text-accent-dark">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-light shrink-0" />
              <span>Jangkauan Siap Antar</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 p-5 rounded-2xl bg-primary-pale/60 border border-primary/12 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[0.92rem] font-semibold text-primary-deep">
              Gratis Ongkir ke Seluruh Wilayah Ciayumajakuning
            </div>
            <div className="text-[0.78rem] text-text-mid">
              Pengiriman terjadwal dan higienis ke Cirebon, Indramayu, Majalengka, dan Kuningan.
            </div>
          </div>
        </div>

        <a
          href={company.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark whitespace-nowrap"
        >
          <span>Konfirmasi Lokasi Acara</span>
          <span>→</span>
        </a>
      </div>
    </Container>
  );
}
