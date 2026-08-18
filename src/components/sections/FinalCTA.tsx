"use client";

import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function FinalCTA() {
  return (
    <div className="w-full bg-gradient-to-br from-primary-deep to-primary-dark">
      <Container id="kontak" className="bg-transparent">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: heading + primary actions */}
          <div>
            <SectionHeading
              theme="dark"
              badge="Hubungi Kami"
              title="Siap melayani acara Anda?"
              description="Konsultasi gratis, food tasting gratis. Percayakan kebutuhan catering acara Anda kepada ahlinya sejak 2013."
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={company.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-4 text-[0.95rem] font-semibold text-white transition-colors duration-200 hover:bg-[#1db954]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat WhatsApp Sekarang
              </a>
              <a
                href={`tel:${company.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-[0.92rem] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Phone size={17} strokeWidth={1.8} />
                Telepon {company.contact.phone}
              </a>
            </div>
          </div>

          {/* Right: contact details — easy to scan, no nested cards */}
          <div className="lg:pt-2">
            <dl className="flex flex-col divide-y divide-white/10 border-t border-white/10">
              <div className="flex items-start gap-4 py-4">
                <Phone size={18} strokeWidth={1.6} className="mt-0.5 shrink-0 text-accent-light" />
                <div>
                  <dt className="text-[0.72rem] uppercase tracking-[1px] text-white/40">
                    Telepon
                  </dt>
                  <dd className="mt-0.5 text-[0.9rem] text-white/80">
                    {company.contact.phone}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4">
                <Mail size={18} strokeWidth={1.6} className="mt-0.5 shrink-0 text-accent-light" />
                <div>
                  <dt className="text-[0.72rem] uppercase tracking-[1px] text-white/40">
                    Email
                  </dt>
                  <dd className="mt-0.5 text-[0.9rem] text-white/80">
                    {company.contact.email}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4">
                <MapPin size={18} strokeWidth={1.6} className="mt-0.5 shrink-0 text-accent-light" />
                <div>
                  <dt className="text-[0.72rem] uppercase tracking-[1px] text-white/40">
                    Alamat
                  </dt>
                  <dd className="mt-0.5 text-[0.9rem] text-white/80">
                    {company.contact.address}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4">
                <Clock size={18} strokeWidth={1.6} className="mt-0.5 shrink-0 text-accent-light" />
                <div>
                  <dt className="text-[0.72rem] uppercase tracking-[1px] text-white/40">
                    Jam Operasional
                  </dt>
                  <dd className="mt-0.5 text-[0.9rem] text-white/80">
                    {company.contact.operatingHours}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </div>
  );
}
