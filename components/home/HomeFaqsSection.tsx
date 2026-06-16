"use client";

import FaqAccordion from "components/services/FaqAccordion";
import TypingTitle from "components/layout/TypingTitle";

const preSalesFaqs = [
  {
    question: "How do your monthly marketing retainers work?",
    answer: "We operate on flat monthly retainers based on your competition index, content volume, and platform scope. Unlike typical agencies, we never charge a percentage of your ad spend. This aligns our incentives directly with lowering your CAC and maximizing your budget efficiency."
  },
  {
    question: "What does a dedicated pod structure look like?",
    answer: "Every retainer is assigned a dedicated pod led by a senior marketing strategist. Depending on your services, your pod includes technical SEOs, media buyers, copywriters, visual designers, and web developers. We communicate directly via Slack and ship updates in weekly sprints."
  },
  {
    question: "Do you offer a free initial growth audit?",
    answer: "Yes. Our senior strategist reviews your current web presence, conversion tracking setup, and ad accounts to identify the top three highest-leverage growth opportunities. We share these in a 30-minute discovery call—with no obligation to hire us."
  },
  {
    question: "Where is the Ninja Marketing team located?",
    answer: "Our operations are based in Regina, Saskatchewan, Canada. We manage strategy, campaign execution, web engineering, and client reporting from our Canadian office, serving local businesses and international brands."
  }
];

export default function HomeFaqsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white md:py-24">
      {/* Background radial highlight */}
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#20A1C9]/5 blur-[120px]" />

      <div className="mx-auto w-full max-w-[1620px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#20A1C9]" />
            <span className="text-xs font-bold uppercase tracking-[0.32em] text-white/45">
              FAQ
            </span>
            <span className="h-px w-10 bg-[#20A1C9]" />
          </div>
          <TypingTitle
            as="h2"
            className="text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
          >
            Answers before you ask
          </TypingTitle>
          <p className="mt-4 text-sm font-semibold tracking-[0.25em] text-[#20A1C9] uppercase">
            Clear. Direct. No Fluff.
          </p>
        </div>

        <FaqAccordion faqs={preSalesFaqs} />
      </div>
    </section>
  );
}
