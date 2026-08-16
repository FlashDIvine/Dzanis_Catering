"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";

export function WhyChooseUs() {
  const advantages = [
    {
      title: "Tersertifikasi Halal MUI",
      description:
        "Seluruh produk kami tersertifikasi halal MUI (ID32110022120450525) — Anda dan tamu dapat menikmati hidangan dengan penuh keyakinan.",
      iconImage: "/images/brand/halal-cert.png",
      iconBg: "bg-primary/30",
    },
    {
      title: "CS Fast Response",
      description:
        "Tim CS kami siap membantu setiap hari pukul 07.00–22.00 WIB, termasuk hari libur. Pertanyaan mendadak pun langsung direspons.",
      emoji: "⚡",
      iconBg: "bg-[#25D366]/20",
    },
    {
      title: "Jaminan Tepat Waktu",
      description:
        "Acara tidak bisa menunggu. Seluruh tim kami berkomitmen mengantar tepat waktu — bahkan sering lebih awal dari jadwal.",
      emoji: "🕐",
      iconBg: "bg-primary/30",
    },
    {
      title: "Gratis Food Tasting",
      description:
        "Belum yakin dengan rasanya? Kami antar langsung ke tempat Anda untuk food tasting sebelum hari H — tanpa biaya apapun.",
      emoji: "🍽️",
      iconBg: "bg-accent/20",
    },
    {
      title: "Pemesanan Mudah",
      description:
        "Cukup via WhatsApp atau telepon. Tidak perlu datang langsung — semua bisa diselesaikan dari mana pun Anda berada.",
      emoji: "📱",
      iconBg: "bg-primary/30",
    },
    {
      title: "Harga Transparan",
      description:
        "Semua harga sudah fix price — tidak ada biaya tersembunyi. Rencanakan anggaran acara Anda dengan tenang dan pasti.",
      emoji: "💰",
      iconBg: "bg-primary/25",
    },
  ];

  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-br from-primary-deep via-primary-dark to-[#0D3560]">
      {/* Decorative Radial Glow */}
      <div className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_65%)] pointer-events-none" />

      <Container id="tentang" className="bg-transparent">
        <SectionHeading
          theme="dark"
          badge="Kenapa Dzanis?"
          title={
            <>
              Dipercaya Lebih dari <em className="italic text-accent-light">10 Tahun</em>
            </>
          }
          description="Bukan sekadar makanan — kami menghadirkan ketenangan pikiran. Anda fokus menikmati acara, konsumsi kami yang urus."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white/[0.04] border border-white/[0.07] p-7 md:p-8 transition-all duration-300 hover:bg-accent/[0.08] hover:border-accent/30 group"
            >
              <div
                className={`w-12 h-12 rounded-[14px] ${item.iconBg} flex items-center justify-center mb-4.5 overflow-hidden text-2xl`}
              >
                {item.iconImage ? (
                  <Image
                    src={item.iconImage}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                ) : (
                  <span>{item.emoji}</span>
                )}
              </div>

              <h4 className="font-serif text-[1.05rem] font-semibold text-white mb-2">
                {item.title}
              </h4>

              <p className="text-[0.82rem] leading-[1.75] text-white/45">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
