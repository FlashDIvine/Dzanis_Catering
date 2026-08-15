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
    <Container id="cara-pesan" className="bg-[#F8F2F8]">
      <SectionHeading
        badge="Cara Pemesanan"
        title={
          <>
            Langkah Mudah <em className="italic text-[#5E8E22]">Memesan</em>
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
            className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-[#7B2D6E]/10 shadow-sm"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#F7EFF6] flex items-center justify-center mb-4 text-2xl font-serif font-bold text-[#7B2D6E]">
              {step.number}
            </div>

            <h3 className="text-[1.05rem] font-bold text-[#1E0C1B] mb-2">
              {step.title}
            </h3>
            <p className="text-[0.82rem] text-[#5A3D56] leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
