"use client";

import { company } from "@/data/company";
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={company.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-[300] flex items-center gap-2 rounded-full bg-[#25D366] text-white p-3.5 sm:px-4 sm:py-3 shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:bg-[#1faa53] hover:shadow-xl active:scale-95 group",
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-8 opacity-0 pointer-events-none"
      )}
      aria-label="Chat WhatsApp Dzanis Catering"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="hidden sm:inline text-[0.84rem] font-semibold pr-1">
        Tanya Menu via WA
      </span>
    </a>
  );
}
