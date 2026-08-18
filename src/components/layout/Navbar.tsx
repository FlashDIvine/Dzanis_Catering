"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Layanan", href: "#layanan" },
    { name: "Harga", href: "#harga" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Area", href: "#area" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[200] transition-all duration-400 flex items-center justify-between",
        isScrolled
          ? "py-3 px-6 md:px-16 bg-white/95 backdrop-blur-[20px] shadow-[0_1px_28px_rgba(15,61,110,0.08)]"
          : "py-5 px-6 md:px-16 bg-transparent"
      )}
    >
      <div className="w-full max-w-[1360px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={cn(
              "relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden",
              isScrolled
                ? "bg-primary-pale/60 shadow-xs"
                : "bg-white/10 backdrop-blur-xs ring-1 ring-white/20"
            )}
          >
            <Image
              src={isScrolled ? company.logo : company.logoLight}
              alt={company.name}
              width={34}
              height={34}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <span
            className={cn(
              "font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300",
              isScrolled ? "text-primary-dark" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            )}
          >
            {company.name}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 text-[0.82rem] font-medium rounded-full transition-all duration-200",
                    isScrolled
                      ? "text-text-mid hover:bg-primary-pale hover:text-primary"
                      : "text-white/80 hover:bg-white/15 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={company.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-full text-[0.82rem] font-semibold transition-colors duration-200 hover:bg-[#1db954]"
          >
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            isScrolled ? "text-primary-dark" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-primary/10 shadow-2xl px-6 py-5 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2.5 text-sm font-medium text-text-mid hover:bg-primary-pale hover:text-primary rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={company.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-xl text-sm font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pesan Sekarang via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
