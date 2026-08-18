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
        title="Pertanyaan yang sering diajukan"
        description="Temukan jawaban cepat untuk pertanyaan umum seputar layanan catering kami."
      />

      <div className="mt-12 max-w-3xl mx-auto flex flex-col border-t border-line">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.id} className="border-b border-line">
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span
                  className={`font-medium text-base md:text-[1.05rem] transition-colors ${
                    isOpen ? "text-primary" : "text-foreground"
                  }`}
                >
                  {faq.question}
                </span>
                <span className="flex shrink-0 items-center justify-center text-primary">
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
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
                    <div className="pb-5 pr-8 text-text-mid text-[0.9rem] leading-[1.75]">
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
