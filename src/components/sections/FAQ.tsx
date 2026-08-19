"use client";

import { faqs } from "@/data/faq";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Container id="faq" className="bg-light-bg">
      <SectionHeading
        badge="Tanya Jawab"
        title="Pertanyaan yang Sering Diajukan"
        description="Temukan jawaban cepat seputar tata cara pemesanan, pengantaran, food tasting, dan ketentuan layanan kami."
      />

      <div className="mt-12 max-w-3xl mx-auto flex flex-col gap-3.5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.id}
              className={cn(
                "bg-white rounded-2xl border transition-all duration-300 overflow-hidden",
                isOpen
                  ? "border-primary/30 shadow-md ring-1 ring-primary/10"
                  : "border-primary/10 shadow-xs hover:border-primary/20"
              )}
            >
              <button
                className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer transition-colors"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span
                  className={cn(
                    "font-serif font-bold text-base md:text-[1.05rem] pr-4 transition-colors",
                    isOpen ? "text-primary-deep" : "text-text-main"
                  )}
                >
                  {faq.question}
                </span>
                <span
                  className={cn(
                    "flex items-center justify-center w-7 h-7 rounded-full shrink-0 transition-colors",
                    isOpen
                      ? "bg-primary text-white"
                      : "bg-primary-pale text-primary"
                  )}
                >
                  {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-6 text-text-mid text-[0.92rem] leading-[1.75] border-t border-primary/8 pt-3.5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
