"use client";

import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FinalCTA() {
  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-br from-[#3D1238] via-[#5A1F50] to-[#521B4A]">
      {/* Decorative Radial Glow */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(125,184,50,0.09)_0%,transparent_65%)] pointer-events-none" />

      <Container id="kontak" className="bg-transparent">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Info */}
          <div>
            <SectionHeading
              theme="dark"
              badge="Hubungi Kami"
              title={
                <>
                  Siap Melayani <em className="italic text-[#9ED44F]">Acara Anda?</em>
                </>
              }
              description="Konsultasi gratis, food tasting gratis. Percayakan kebutuhan catering acara Anda kepada ahlinya sejak 2013."
            />

            <div className="mt-8 flex flex-col gap-3.5">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center text-lg shrink-0">
                  📱
                </div>
                <a
                  href={company.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#9ED44F] text-[0.88rem] transition-colors"
                >
                  {company.contact.whatsapp} (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center text-lg shrink-0">
                  📞
                </div>
                <a
                  href={`tel:${company.contact.phoneRaw}`}
                  className="text-white/70 hover:text-[#9ED44F] text-[0.88rem] transition-colors"
                >
                  {company.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center text-lg shrink-0">
                  ✉️
                </div>
                <span className="text-white/70 text-[0.88rem]">{company.contact.email}</span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center text-lg shrink-0">
                  📍
                </div>
                <span className="text-white/70 text-[0.88rem]">{company.contact.address}</span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center text-lg shrink-0">
                  🕐
                </div>
                <span className="text-white/70 text-[0.88rem]">
                  {company.contact.operatingHours}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Floating Glass CTA Box */}
          <div className="bg-white/[0.07] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl">
            <h3 className="font-serif text-xl font-bold text-white mb-6">
              Mulai Pemesanan Sekarang
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href={company.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4.5 bg-[#25D366] text-white rounded-2xl font-semibold text-[0.98rem] shadow-[0_8px_24px_rgba(37,211,102,0.28)] transition-all duration-200 hover:bg-[#1db954] hover:-translate-y-0.5"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat WhatsApp Sekarang
              </a>

              <a
                href={`tel:${company.contact.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 p-3.5 bg-white/[0.08] border border-white/[0.13] text-white/80 rounded-2xl text-[0.9rem] font-medium transition-colors hover:bg-white/[0.14]"
              >
                📞 Telepon {company.contact.phone}
              </a>
            </div>

            <div className="text-center mt-4 text-[0.74rem] text-white/40">
              Layanan CS setiap hari · <strong className="text-white/60 font-semibold">{company.contact.operatingHours}</strong>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
