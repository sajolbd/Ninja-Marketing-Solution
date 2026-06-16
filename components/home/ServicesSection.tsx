"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import Container from "components/shared/Container";
import { servicesData } from "data/services";
import TypingTitle from "components/layout/TypingTitle";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % servicesData.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  };

  // Show 3 cards at a time
  const visibleServices = [
    servicesData[activeIndex],
    servicesData[(activeIndex + 1) % servicesData.length],
    servicesData[(activeIndex + 2) % servicesData.length],
  ];

  return (
    <section className="relative overflow-hidden bg-black py-8 text-white md:py-16">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#20A1C9]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#20A1C9]/10 blur-[130px]" />

      <Container className="relative z-10">
        <div className="mb-12 md:mb-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-bold tracking-[0.28em] text-[#20A1C9]">
              02
            </span>
            <span className="h-px w-10 bg-[#20A1C9]" />
            <span className="text-xs font-bold uppercase tracking-[0.32em] text-white/45">
              Services
            </span>
          </div>

          <TypingTitle
            as="h2"
            className="max-w-4xl text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
          >
            A Full-Stack
            <br />
            <span className="text-[#20A1C9]">Growth Team</span>
            <br />
            On Retainer.
          </TypingTitle>

          <p className="mt-8 max-w-2xl text-base font-medium leading-8 text-white/65 sm:text-lg">
            29 services spanning paid media, creative, web, and strategy — all
            executed by our in-house team of specialists.
          </p>

          <Link
            href="/services"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#20A1C9] transition-all duration-300 hover:gap-3"
          >
            All Services
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Services Slider */}
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <style>{`
              @keyframes slideOutLeft {
                from {
                  opacity: 1;
                  transform: translateX(0);
                }
                to {
                  opacity: 0;
                  transform: translateX(-100px);
                }
              }
              
              @keyframes slideInFromRight {
                from {
                  opacity: 0;
                  transform: translateX(100px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
            `}</style>
            {visibleServices.map((service, index) => (
              <Link
                key={service.id}
                href={service.href}
                className={`group relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#20A1C9] hover:bg-[#20A1C9]/5 md:p-8 ${
                  index === 1 ? "hidden md:block" : index === 2 ? "hidden lg:block" : ""
                }`}
                style={{
                  animation: `slideInFromRight 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.12}s both`,
                }}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#20A1C9] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#20A1C9]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#20A1C9]/25" />

                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm font-bold tracking-[0.28em] text-[#20A1C9]">
                    {String(service.id).padStart(2, "0")} / 29
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:text-[#20A1C9] group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <div className="mt-8">
                  <h3 className="font-medium uppercase leading-[1.08] text-2xl text-white md:text-3xl sm:tracking-[0.06em]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-[#20A1C9]">
                    {service.tagline}
                  </p>

                  <p className="mt-6 text-sm font-medium leading-6 text-white/60">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold tracking-[0.25em] text-white">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <div className="h-px w-6 bg-white/20" />
              <span className="text-sm font-bold tracking-[0.25em] text-white/40">
                29
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous service"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] transition-all duration-300 hover:border-[#20A1C9] hover:bg-[#20A1C9]"
              >
                <ArrowLeft className="h-4 w-4 text-white transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next service"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#20A1C9] bg-[#20A1C9] transition-all duration-300 hover:bg-transparent"
              >
                <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
