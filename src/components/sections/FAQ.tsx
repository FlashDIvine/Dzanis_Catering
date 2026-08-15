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
    <Container id="faq" className="bg-[#F8F2F8]">
      <SectionHeading
        badge="FAQ"
        title={
          <>
            Pertanyaan yang Sering <em className="italic text-[#5E8E22]">Diajukan</em>
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
                  ? "border-[#7B2D6E]/25 shadow-[0_4px_20px_rgba(123,45,110,0.08)]"
                  : "border-[#7B2D6E]/10"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span
                  className={`font-semibold text-base md:text-[1.05rem] pr-4 transition-colors ${
                    isOpen ? "text-[#7B2D6E]" : "text-[#1E0C1B]"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex items-center justify-center w-7 h-7 rounded-full shrink-0 transition-colors ${
                    isOpen
                      ? "bg-[#7B2D6E] text-white"
                      : "bg-[#F7EFF6] text-[#7B2D6E]"
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
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5A3D56] text-[0.9rem] leading-[1.75] border-t border-[#7B2D6E]/[0.06] pt-3.5">
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
