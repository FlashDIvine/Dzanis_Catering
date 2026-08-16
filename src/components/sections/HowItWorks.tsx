"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Hubungi CS",
      description: "Konsultasikan kebutuhan acara Anda melalui WhatsApp atau telepon.",
    },
    {
      number: "02",
      title: "Pilih Menu & Tasting",
      description: "Tentukan paket catering dan nikmati layanan gratis food tasting.",
    },
    {
      number: "03",
      title: "Konfirmasi & DP",
      description: "Amankan jadwal pengantaran acara Anda dengan pembayaran DP.",
    },
    {
      number: "04",
      title: "Antar Tepat Waktu",
      description: "Hidangan lezat dan pelayanan profesional hadir tepat waktu di lokasi acara.",
    },
  ];

  return (
    <Container id="cara-pesan" className="bg-light-bg">
      <SectionHeading
        badge="Cara Pemesanan"
        title={
          <>
            Langkah Mudah <em className="italic text-accent-dark">Memesan</em>
          </>
        }
        description="Proses pemesanan yang sederhana, cepat, dan transparan untuk kenyamanan Anda."
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-primary/10 shadow-sm"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-pale flex items-center justify-center mb-4 text-2xl font-serif font-bold text-primary">
              {step.number}
            </div>

            <h3 className="text-[1.05rem] font-bold text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-[0.82rem] text-text-mid leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
