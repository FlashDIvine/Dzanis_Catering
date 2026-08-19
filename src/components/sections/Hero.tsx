"use client";

import { motion } from "framer-motion";
import { heroData } from "@/data/hero";
import { company } from "@/data/company";
import Image from "next/image";
import { MessageCircle, CheckCircle2, ChevronDown, Truck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
      {/* Background Photography with Refined Editorial Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroData.image}
          alt="Dzanis Catering Buffet & Prasmanan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.85] saturate-[1.15]"
        />
        {/* Responsive Multi-stop Gradient: subtle on mobile to showcase food photography, rich depth on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/75 to-primary-deep/30 sm:to-primary-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/40 to-transparent sm:via-transparent sm:to-primary-deep/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 my-auto">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Actions (Clean & Immersive on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start max-w-2xl lg:max-w-none"
          >
            {/* Eyebrow: CIAYUMAJAKUNING on Mobile, Full string on Desktop */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xs px-3.5 py-1 text-[0.7rem] sm:text-[0.72rem] font-semibold uppercase tracking-[1.8px] text-white/90 mb-4 sm:mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-light shrink-0" />
              <span className="sm:hidden">CIAYUMAJAKUNING</span>
              <span className="hidden sm:inline">{heroData.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[2.2rem] sm:text-[2.8rem] md:text-5xl lg:text-[4.2rem] font-bold leading-[1.12] sm:leading-[1.08] text-white mb-4 sm:mb-5 tracking-tight">
              {heroData.headline.line1}{" "}
              <span className="text-accent-light italic font-serif">
                {heroData.headline.accent}
              </span>{" "}
              <br className="hidden sm:inline" />
              {heroData.headline.line2}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-[0.92rem] sm:text-[1.05rem] leading-[1.68] sm:leading-[1.75] text-white/85 max-w-[540px] mb-6 sm:mb-8 font-sans">
              {heroData.description}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 w-full sm:w-auto mb-6 sm:mb-8">
              <a
                href={heroData.cta.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 bg-[#25D366] text-white font-semibold text-[0.92rem] sm:text-[0.95rem] rounded-full shadow-md shadow-[#25D366]/20 transition-all duration-200 hover:bg-[#1faa53] hover:-translate-y-0.5 active:scale-98 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>{heroData.cta.primary}</span>
              </a>
              <a
                href={heroData.cta.menuAnchor}
                className="inline-flex items-center justify-center px-6 py-3.5 sm:px-7 sm:py-4 border border-white/30 bg-white/5 backdrop-blur-xs text-white font-medium text-[0.92rem] sm:text-[0.95rem] rounded-full transition-all duration-200 hover:bg-white/15 hover:border-white/50 text-center"
              >
                <span>{heroData.cta.secondary}</span>
              </a>
            </div>

            {/* Credibility Micro-badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-white/80 text-[0.76rem] sm:text-[0.8rem]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent-light shrink-0" />
                <span>Food Tasting Gratis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent-light shrink-0" />
                <span>Tanpa Biaya Tersembunyi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent-light shrink-0" />
                <span>Fast Response Setiap Hari</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Unified Trust Panel (DESKTOP ONLY - hidden on mobile/tablet) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:block w-full max-w-[420px] ml-auto"
          >
            <div className="bg-primary-deep/90 border border-white/15 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md text-white">
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <span className="font-serif text-[0.95rem] font-semibold text-white/90">
                  {heroData.trustCard.title}
                </span>
                <span className="text-[0.7rem] font-medium uppercase tracking-wider text-accent-light bg-accent-soft px-2.5 py-0.5 rounded-full">
                  Official Partner
                </span>
              </div>

              {/* 2x2 Metrics Grid with Subtle Dividers */}
              <div className="grid grid-cols-2 gap-4 divide-x divide-white/10">
                {/* Left metrics column */}
                <div className="space-y-4">
                  <div>
                    <div className="font-serif text-3xl font-bold text-white leading-none mb-1">
                      {company.stats.experience}
                    </div>
                    <div className="text-[0.75rem] font-medium text-white/60">
                      {company.stats.experienceLabel} Pengalaman
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/10">
                    <div className="font-serif text-3xl font-bold text-gold-light leading-none mb-1 flex items-center gap-1">
                      <span>{company.stats.rating}</span>
                      <span className="text-xl">★</span>
                    </div>
                    <div className="text-[0.75rem] font-medium text-white/60">
                      Ulasan Google
                    </div>
                  </div>
                </div>

                {/* Right metrics column */}
                <div className="space-y-4 pl-4">
                  <div>
                    <div className="font-serif text-3xl font-bold text-white leading-none mb-1">
                      {company.stats.events}
                    </div>
                    <div className="text-[0.75rem] font-medium text-white/60">
                      {company.stats.eventsLabel}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/10">
                    <div className="font-serif text-3xl font-bold text-accent-light leading-none mb-1">
                      {company.stats.onTime}
                    </div>
                    <div className="text-[0.75rem] font-medium text-white/60">
                      Jaminan Tepat Waktu
                    </div>
                  </div>
                </div>
              </div>

              {/* Accreditations & Delivery Section */}
              <div className="mt-5 pt-4 border-t border-white/10 space-y-3">
                {/* Halal MUI Row */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/8">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 p-1">
                    <Image
                      src={company.halal.logo}
                      alt="Halal MUI Certificate"
                      width={28}
                      height={28}
                      style={{ width: "auto", height: "auto" }}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[0.82rem] font-semibold text-white truncate">
                      Tersertifikasi Halal MUI
                    </div>
                    <div className="text-[0.7rem] text-white/50 font-mono truncate">
                      {company.halal.certNumber}
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-accent-light shrink-0" />
                </div>

                {/* Free Delivery Row */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/8">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-accent-light">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[0.82rem] font-semibold text-white">
                      Gratis Ongkir
                    </div>
                    <div className="text-[0.7rem] text-white/50 truncate">
                      Wilayah Ciayumajakuning
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-accent-light shrink-0" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator (Desktop) */}
      <a
        href="#layanan"
        className="relative z-10 mx-auto mt-6 hidden md:flex flex-col items-center gap-1 text-white/40 hover:text-white/80 transition-colors uppercase tracking-[1.5px] text-[0.68rem] font-medium"
      >
        <span>Jelajahi Menu</span>
        <ChevronDown className="w-4 h-4 animate-scroll-bounce" />
      </a>
    </section>
  );
}
