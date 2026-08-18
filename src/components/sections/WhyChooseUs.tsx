"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Clock, UtensilsCrossed, Smartphone, Wallet, type LucideIcon } from "lucide-react";

type Advantage = {
  title: string;
  description: string;
  icon?: LucideIcon;
  iconImage?: string;
};

const advantages: Advantage[] = [
  {
    title: "Tersertifikasi Halal MUI",
    description:
      "Seluruh produk kami tersertifikasi halal MUI (ID32110022120450525) — Anda dan tamu dapat menikmati hidangan dengan penuh keyakinan.",
    iconImage: "/images/brand/halal-cert.png",
  },
  {
    title: "CS Fast Response",
    description:
      "Tim CS kami siap membantu setiap hari pukul 07.00–22.00 WIB, termasuk hari libur. Pertanyaan mendadak pun langsung direspons.",
    icon: Zap,
  },
  {
    title: "Jaminan Tepat Waktu",
    description:
      "Acara tidak bisa menunggu. Seluruh tim kami berkomitmen mengantar tepat waktu — bahkan sering lebih awal dari jadwal.",
    icon: Clock,
  },
  {
    title: "Gratis Food Tasting",
    description:
      "Belum yakin dengan rasanya? Kami antar langsung ke tempat Anda untuk food tasting sebelum hari H — tanpa biaya apapun.",
    icon: UtensilsCrossed,
  },
  {
    title: "Pemesanan Mudah",
    description:
      "Cukup via WhatsApp atau telepon. Tidak perlu datang langsung — semua bisa diselesaikan dari mana pun Anda berada.",
    icon: Smartphone,
  },
  {
    title: "Harga Transparan",
    description:
      "Semua harga sudah fix price — tidak ada biaya tersembunyi. Rencanakan anggaran acara Anda dengan tenang dan pasti.",
    icon: Wallet,
  },
];

export function WhyChooseUs() {
  return (
    <div className="w-full bg-gradient-to-br from-primary-deep to-primary-dark">
      <Container id="tentang" className="bg-transparent">
        <SectionHeading
          theme="dark"
          badge="Kenapa Dzanis?"
          title="Dipercaya lebih dari 10 tahun"
          description="Bukan sekadar makanan — kami menghadirkan ketenangan pikiran. Anda fokus menikmati acara, konsumsi kami yang urus."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center text-accent-light">
                  {item.iconImage ? (
                    <Image
                      src={item.iconImage}
                      alt={item.title}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  ) : (
                    Icon && <Icon size={26} strokeWidth={1.5} />
                  )}
                </div>

                <h4 className="mb-2 font-serif text-[1.1rem] font-semibold text-white">
                  {item.title}
                </h4>

                <p className="text-[0.86rem] leading-[1.75] text-white/55">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
