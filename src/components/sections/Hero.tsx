"use client";

import { motion } from "framer-motion";
import { heroData } from "@/data/hero";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-28 pb-20 md:pb-24">
      {/* Background Gradient & Food Photography Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#3D1238] via-[#5A1F50] to-[#4A1840]" />
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: `url(${heroData.image})` }}
      />

      {/* Decorative Geometric Rings and Radial Glow */}
      <div className="absolute -right-24 -top-24 w-[700px] h-[700px] rounded-full border border-[#7DB832]/10 pointer-events-none" />
      <div className="absolute right-20 top-20 w-[420px] h-[420px] rounded-full border-[60px] border-[#7B2D6E]/15 pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(125,184,50,0.12)_0%,transparent_65%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-end">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7DB832]/25 bg-[#7DB832]/12 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[1.5px] text-[#9ED44F] mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7DB832] animate-badge-blink" />
              {heroData.eyebrow}
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[clamp(2.7rem,5.5vw,4.6rem)] font-bold leading-[1.06] text-white mb-5">
              {heroData.headline.line1} <em className="italic text-[#9ED44F] font-serif not-italic-fallback">{heroData.headline.accent}</em> <br className="hidden sm:inline" />
              {heroData.headline.line2}
            </h1>

            {/* Subtitle */}
            <p className="text-[1rem] leading-[1.85] text-white/60 max-w-[520px] mb-9 font-sans">
              {heroData.description}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href={heroData.cta.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] text-white font-semibold text-[0.95rem] rounded-full shadow-[0_8px_28px_rgba(37,211,102,0.38)] transition-all duration-200 hover:bg-[#1db954] hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {heroData.cta.primary}
              </a>
              <a
                href={heroData.cta.menuAnchor}
                className="inline-flex items-center justify-center px-6 py-3.5 border-[1.5px] border-white/20 text-white/80 font-medium text-[0.95rem] rounded-full transition-colors hover:bg-white/10 hover:text-white w-full sm:w-auto"
              >
                {heroData.cta.secondary}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Floating Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full max-w-[400px] mx-auto lg:ml-auto"
          >
            <div className="bg-white/[0.06] border border-white/10 rounded-3xl p-7 md:p-8 backdrop-blur-md shadow-2xl">
              <div className="font-serif text-[0.9rem] text-white/50 mb-5 tracking-[0.3px]">
                {heroData.trustCard.title}
              </div>

              {/* 2x2 Stat Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {heroData.trustCard.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-[#7DB832]/10 border border-[#7DB832]/20 rounded-2xl p-4 text-center"
                  >
                    <strong className="block font-serif text-[1.9rem] font-bold text-[#9ED44F] leading-none mb-1">
                      {stat.value}
                    </strong>
                    <span className="text-[0.68rem] text-white/45 uppercase tracking-[0.8px] font-semibold">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust Rows */}
              <div className="space-y-2.5">
                {heroData.trustCard.certifications.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 bg-white/[0.05] border border-white/[0.08] rounded-2xl p-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xl">
                      {item.icon ? (
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      ) : (
                        <span>{item.emoji}</span>
                      )}
                    </div>
                    <div>
                      <strong className="block text-[0.83rem] font-semibold text-white/85">
                        {item.title}
                      </strong>
                      <span className="text-[0.72rem] text-white/40">{item.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#layanan"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/35 hover:text-white/70 transition-colors uppercase tracking-[1.5px] text-[0.7rem] font-medium"
      >
        <div className="w-5 h-5 border-r-[1.5px] border-b-[1.5px] border-white/35 rotate-45 animate-scroll-bounce" />
      </a>
    </section>
  );
}
