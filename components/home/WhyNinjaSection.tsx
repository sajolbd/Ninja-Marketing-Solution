"use client";

import TypingTitle from "components/layout/TypingTitle";
import Container from "components/shared/Container";
import { BadgeCheck, Users, BarChart3, Building2 } from "lucide-react";

const pillars = [
  {
    icon: BadgeCheck,
    title: "Certified Partner",
    description:
      "Recognized across digital platforms with verified marketing execution, transparent strategy, and performance-focused campaign management.",
  },
  {
    icon: Users,
    title: "In-House Team",
    description:
      "A dedicated creative and marketing team under one roof. No scattered freelancers, no confusing hand-offs, just smooth execution.",
  },
  {
    icon: BarChart3,
    title: "Performance Reporting",
    description:
      "Clear monthly reports tied to reach, leads, conversions, and campaign performance so every result is easy to understand.",
  },
  {
    icon: Building2,
    title: "Multi-Industry",
    description:
      "Tested marketing playbooks across real estate, healthcare, e-commerce, education, travel, lifestyle, and service-based brands.",
  },
];

export default function WhyNinjaSection() {
  return (
    <section className="relative overflow-hidden bg-black py-8 text-white md:py-16">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#20A1C9]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#20A1C9]/10 blur-[130px]" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="mb-8 flex items-center gap-4">
              <span className="text-xs font-bold tracking-[0.28em] text-[#20A1C9]">
                01
              </span>
              <span className="h-px w-10 bg-[#20A1C9]" />
              <span className="text-xs font-bold uppercase tracking-[0.32em] text-white/45">
                Why Ninja
              </span>
            </div>

            <TypingTitle
              as="h2"
              className="max-w-2xl text-[clamp(2.7rem,6vw,6.2rem)] font-medium uppercase leading-[1.08] tracking-[0.055em] text-3xl text-white sm:max-w-4xl sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
            >
              Four Pillars
              <br />
              Behind Every
              <br />
              <span className="text-[#20A1C9]">Growing Brand.</span>
            </TypingTitle>

            <p className="mt-8 max-w-md text-base font-medium leading-8 text-white/65 sm:text-lg">
              Tailored social media, SEO, lead generation, paid ads, and web
              strategy — backed by data, guided by insights, and built to
              perform.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] sm:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="group relative min-h-[260px] overflow-hidden border-b border-white/10 border-t border-t-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:border-t-[#20A1C9] hover:bg-[#20A1C9]/10 sm:p-8 lg:p-10 odd:sm:border-r"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#20A1C9] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#20A1C9]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#20A1C9]/25" />

                  <div className="flex items-start justify-between gap-6">
                    <Icon className="h-5 w-5 text-[#20A1C9]" />
                    <span className="text-xs font-semibold tracking-[0.28em] text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-14 text-lg font-semibold uppercase tracking-[0.35em] text-white sm:text-xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm font-medium leading-7 text-white/60 sm:text-base">
                    {pillar.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
