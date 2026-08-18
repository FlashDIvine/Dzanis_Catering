"use client";

import { motion } from "framer-motion";
import { heroData } from "@/data/hero";
import { Star } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden pt-28 pb-14 md:pb-16">
      {/* Food Photography — the primary visual */}
      <Image
        src={heroData.image}
        alt="Hidangan catering Dzanis"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Legibility scrims — navy from left and bottom, keeps the food visible on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/70 to-primary-deep/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/10 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-5 text-[0.78rem] font-semibold uppercase tracking-[2.5px] text-accent-light">
            {heroData.eyebrow}
          </p>

          <h1 className="mb-5 font-serif text-[clamp(2.5rem,5.5vw,4.4rem)] font-semibold leading-[1.08] text-white text-balance">
            {heroData.headline.line1}{" "}
            <em className="not-italic text-accent-light">{heroData.headline.accent}</em>{" "}
            {heroData.headline.line2}
          </h1>

          <p className="mb-9 max-w-xl text-[1.02rem] leading-[1.8] text-white/75">
            {heroData.description}
          </p>

          <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href={heroData.cta.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-[0.95rem] font-semibold text-white transition-colors duration-200 hover:bg-[#1db954] sm:w-auto"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {heroData.cta.primary}
            </a>
            <a
              href={heroData.cta.menuAnchor}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-7 py-4 text-[0.95rem] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white sm:w-auto"
            >
              {heroData.cta.secondary}
            </a>
          </div>
        </motion.div>

        {/* Trust strip — plain, no cards */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-white/80"
        >
          {heroData.trustCard.stats.map((stat, i) => {
            const hasStar = stat.value.includes("★");
            const value = stat.value.replace("★", "");
            return (
              <li key={i} className="flex items-baseline gap-2">
                <span className="flex items-center gap-1 font-serif text-xl font-semibold text-accent-light">
                  {value}
                  {hasStar && (
                    <Star size={15} className="fill-gold-light text-gold-light" />
                  )}
                </span>
                <span className="text-[0.8rem] uppercase tracking-[0.5px] text-white/55">
                  {stat.label}
                </span>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
