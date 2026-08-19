"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Zap,
  Clock,
  UtensilsCrossed,
  MessageSquareCheck,
  BadgePercent,
} from "lucide-react";

export function WhyChooseUs() {
  const advantages = [
    {
      title: "Tersertifikasi Halal MUI",
      description:
        "Seluruh proses pengolahan dan bahan tersertifikasi resmi halal MUI (ID32110022120450525). Santap hidangan dengan tenang dan penuh keyakinan.",
      icon: null,
      iconImage: "/images/brand/halal-cert.png",
    },
    {
      title: "CS Fast Response",
      description:
        "Tim representatif kami siap melayani setiap hari pukul 07.00–22.00 WIB, termasuk hari libur. Konsultasi menu dan kebutuhan mendadak cepat teratasi.",
      icon: <Zap className="w-5 h-5 text-accent-light" />,
    },
    {
      title: "Jaminan Tepat Waktu",
      description:
        "Jadwal acara Anda adalah prioritas mutlak kami. Seluruh pengiriman tiba tepat waktu di lokasi villa, gedung, maupun kediaman Anda.",
      icon: <Clock className="w-5 h-5 text-accent-light" />,
    },
    {
      title: "Gratis Food Tasting",
      description:
        "Pastikan rasa dan kualitas sebelum hari H. Kami siap mengantarkan sample food tasting langsung ke lokasi Anda tanpa biaya tambahan.",
      icon: <UtensilsCrossed className="w-5 h-5 text-accent-light" />,
    },
    {
      title: "Pemesanan Praktis via WA",
      description:
        "Cukup via WhatsApp atau telepon. Tim kami menyusun rincian penawaran, invoice, hingga jadwal pengantaran secara rapi dan instan.",
      icon: <MessageSquareCheck className="w-5 h-5 text-accent-light" />,
    },
    {
      title: "Harga Transparan & Pasti",
      description:
        "Semua penawaran sudah jelas tanpa biaya tersembunyi. Rencanakan anggaran acara keluarga maupun instansi Anda dengan nyaman.",
      icon: <BadgePercent className="w-5 h-5 text-accent-light" />,
    },
  ];

  return (
    <div className="w-full relative overflow-hidden bg-primary-deep text-white">
      <Container id="tentang" className="bg-transparent">
        <SectionHeading
          theme="dark"
          badge="Keunggulan Layanan"
          title="Dipercaya Melayani Ribuan Acara Sejak 2013"
          description="Bukan sekadar sajian makanan — kami menghadirkan ketenangan pikiran agar Anda dapat menikmati momen berharga bersama para tamu."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 group flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/12 flex items-center justify-center mb-5 shrink-0">
                  {item.iconImage ? (
                    <Image
                      src={item.iconImage}
                      alt={item.title}
                      width={28}
                      height={28}
                      style={{ width: "auto", height: "auto" }}
                      className="object-contain"
                    />
                  ) : (
                    item.icon
                  )}
                </div>

                <h3 className="font-serif text-[1.15rem] font-bold text-white mb-2.5 tracking-tight group-hover:text-accent-light transition-colors">
                  {item.title}
                </h3>

                <p className="text-[0.88rem] leading-[1.7] text-white/70">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
