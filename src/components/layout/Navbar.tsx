"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
        "fixed top-0 left-0 right-0 z-[200] transition-all duration-300 flex items-center justify-between",
        isScrolled
          ? "py-3 px-6 md:px-12 lg:px-16 bg-white/95 backdrop-blur-md border-b border-primary/8 shadow-xs"
          : "py-5 px-6 md:px-12 lg:px-16 bg-transparent"
      )}
    >
      <div className="w-full max-w-[1360px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={cn(
              "relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden shrink-0",
              isScrolled
                ? "bg-primary-pale/80"
                : "bg-white/15 backdrop-blur-xs border border-white/25 shadow-xs"
            )}
          >
            <Image
              src={isScrolled ? company.logo : company.logoLight}
              alt={company.name}
              width={34}
              height={34}
              style={{ width: "auto", height: "auto" }}
              className="max-h-[30px] max-w-[30px] object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-serif text-xl sm:text-2xl font-bold tracking-tight leading-none transition-colors duration-300",
                isScrolled ? "text-primary-deep" : "text-white"
              )}
            >
              {company.name}
            </span>
            <span
              className={cn(
                "text-[0.65rem] font-medium tracking-wider uppercase mt-0.5 transition-colors duration-300 hidden sm:block",
                isScrolled ? "text-text-light" : "text-white/70"
              )}
            >
              Catering Wilayah Ciayumajakuning
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1.5">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-[0.84rem] font-medium rounded-full transition-all duration-200",
                    isScrolled
                      ? "text-text-mid hover:text-primary-dark hover:bg-primary-pale"
                      : "text-white/85 hover:text-white hover:bg-white/12"
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
            className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-full text-[0.84rem] font-semibold shadow-xs transition-all duration-200 hover:bg-[#1faa53] hover:shadow-sm active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Pesan Sekarang</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={cn(
            "md:hidden p-2 rounded-xl transition-colors border",
            isScrolled
              ? "text-primary-deep border-primary/10 bg-primary-pale/40"
              : "text-white border-white/20 bg-white/10"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-primary/10 shadow-xl px-6 py-5 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2.5 text-[0.92rem] font-medium text-text-mid hover:bg-primary-pale hover:text-primary rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={company.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] text-white rounded-xl text-sm font-semibold shadow-md active:scale-98"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Pesan Sekarang via WhatsApp</span>
          </a>
        </div>
      )}
    </nav>
  );
}
