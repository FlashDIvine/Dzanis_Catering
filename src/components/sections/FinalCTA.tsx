"use client";

import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MessageCircle, Phone, Mail, MapPin, Clock, CalendarCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <div className="w-full relative overflow-hidden bg-primary-deep text-white">
      <Container id="kontak" className="bg-transparent">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Hospitality Info */}
          <div className="lg:col-span-7">
            <SectionHeading
              theme="dark"
              badge="Hubungi Kami"
              title="Konsultasikan Kebutuhan Catering Acara Anda"
              description="Dapatkan penawaran menu custom, gratis food tasting, dan rekomendasi paket terbaik sesuai budget acara Anda dari tim ahli Dzanis Catering."
            />

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={company.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[0.72rem] text-white/50 font-medium">WhatsApp Resmi</div>
                  <div className="text-white text-[0.88rem] font-semibold truncate group-hover:text-accent-light transition-colors">
                    {company.contact.whatsapp}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${company.contact.phoneRaw}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary-light flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[0.72rem] text-white/50 font-medium">Telepon Kantor</div>
                  <div className="text-white text-[0.88rem] font-semibold truncate group-hover:text-accent-light transition-colors">
                    {company.contact.phone}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-white/10 text-white/80 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[0.72rem] text-white/50 font-medium">Email Pemesanan</div>
                  <div className="text-white/90 text-[0.88rem] font-semibold truncate">
                    {company.contact.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-white/10 text-white/80 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[0.72rem] text-white/50 font-medium">Jam Layanan CS</div>
                  <div className="text-white/90 text-[0.85rem] font-semibold truncate">
                    {company.contact.operatingHours}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-white/10 text-white/80 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[0.72rem] text-white/50 font-medium">Dapur Pusat & Kantor</div>
                  <div className="text-white/85 text-[0.85rem] font-medium leading-relaxed">
                    {company.contact.address}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Booking Action Box */}
          <div className="lg:col-span-5 bg-white/10 border border-white/15 rounded-3xl p-7 sm:p-9 backdrop-blur-md shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-[0.7rem] font-bold uppercase tracking-wider mb-4">
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Reservasi & Booking Tanggal</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-white mb-2 tracking-tight">
              Rencanakan Acara Anda Sekarang
            </h3>

            <p className="text-white/75 text-[0.88rem] leading-[1.6] mb-6">
              Amankan jadwal acara Anda di wilayah Ciayumajakuning lebih awal untuk memastikan ketersediaan tim dan pramusaji kami.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={company.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-[#25D366] text-white rounded-xl font-semibold text-[0.98rem] shadow-lg shadow-[#25D366]/25 transition-all duration-200 hover:bg-[#1faa53] hover:-translate-y-0.5 active:scale-98 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chat WhatsApp Sekarang</span>
              </a>

              <a
                href={`tel:${company.contact.phoneRaw}`}
                className="flex items-center justify-center gap-2 p-3.5 bg-white/10 border border-white/20 text-white rounded-xl text-[0.9rem] font-medium transition-colors hover:bg-white/20 text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Hubungi via Telepon Langsung</span>
              </a>
            </div>

            <div className="text-center mt-5 text-[0.76rem] text-white/50">
              Layanan CS Aktif · <span className="text-white/80 font-medium">{company.contact.operatingHours}</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
