"use client";

import { faqs } from "@/data/faq";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Container id="faq" className="bg-light-bg">
      <SectionHeading
        badge="FAQ"
        title={
          <>
            Pertanyaan yang Sering <em className="italic text-accent-dark">Diajukan</em>
          </>
        }
        description="Temukan jawaban cepat untuk pertanyaan umum seputar layanan catering kami."
      />

      <div className="mt-12 max-w-3xl mx-auto flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.id}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-primary/30 shadow-[0_4px_20px_rgba(26,91,150,0.08)]"
                  : "border-primary/10"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span
                  className={`font-semibold text-base md:text-[1.05rem] pr-4 transition-colors ${
                    isOpen ? "text-primary" : "text-foreground"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex items-center justify-center w-7 h-7 rounded-full shrink-0 transition-colors ${
                    isOpen
                      ? "bg-primary text-white"
                      : "bg-primary-pale text-primary"
                  }`}
                >
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-text-mid text-[0.9rem] leading-[1.75] border-t border-primary/[0.06] pt-3.5">
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
