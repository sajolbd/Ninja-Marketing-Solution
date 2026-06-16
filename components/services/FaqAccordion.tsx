"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  faqs: FAQ[];
};

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mx-auto max-w-4xl space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-white/20"
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-white md:p-6"
            >
              <span className="text-base md:text-lg">{faq.question}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/60 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-[#20A1C9]/20 text-[#20A1C9]" : ""
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[500px] border-t border-white/5 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="p-5 text-sm leading-7 text-white/60 md:p-6 md:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
