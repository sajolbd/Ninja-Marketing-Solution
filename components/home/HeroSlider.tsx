"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type HeroSlide = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
};

type HeroSliderProps = {
  slides?: HeroSlide[];
};

const defaultSlides: HeroSlide[] = [
  {
    eyebrow: "Since 2022",
    title: "SOCIAL MEDIA MARKETING THAT",
    highlight: "TURNS SCROLLS INTO SALES.",
    description:
      "Creative content, smart strategy, and performance-driven campaigns - all built to grow your brand.",
    primaryButton: {
      label: "Free Audit",
      href: "/contact",
    },
    secondaryButton: {
      label: "Case Studies",
      href: "/case-studies",
    },
  },
  {
    eyebrow: "Social That Converts",
    title: "SOCIAL MEDIA THAT BUILDS",
    highlight: "BRANDS PEOPLE REMEMBER.",
    description:
      "From engaging posts to conversion-focused campaigns, we create social experiences that connect and sell.",
    primaryButton: {
      label: "Free Audit",
      href: "/contact",
    },
    secondaryButton: {
      label: "Industries",
      href: "/industries",
    },
  },
  {
    eyebrow: "Growth Partner",
    title: "SOCIAL MEDIA MARKETING THAT",
    highlight: "MAKES YOUR BRAND TALKED ABOUT.",
    description:
      "Bold ideas, consistent storytelling, and targeted campaigns designed to keep your audience engaged.",
    primaryButton: {
      label: "Start Project",
      href: "/contact",
    },
    secondaryButton: {
      label: "Services",
      href: "/services",
    },
  },
];

function formatNumber(value: number) {
  return String(value).padStart(2, "0");
}

export default function HeroSlider({
  slides = defaultSlides,
}: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "previous">("next");

  const totalSlides = slides.length;

  const activeSlide = useMemo(() => slides[activeIndex], [slides, activeIndex]);

  const goToSlide = (nextIndex: number, nextDirection: "next" | "previous") => {
    if (nextIndex === activeIndex) {
      return;
    }

    setDirection(nextDirection);
    setPreviousIndex(activeIndex);
    setActiveIndex(nextIndex);
  };

  const goToNext = () => {
    goToSlide((activeIndex + 1) % totalSlides, "next");
  };

  const goToPrevious = () => {
    goToSlide(
      activeIndex === 0 ? totalSlides - 1 : activeIndex - 1,
      "previous",
    );
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDirection("next");
      setPreviousIndex(activeIndex);
      setActiveIndex((activeIndex + 1) % totalSlides);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [activeIndex, totalSlides]);

  const getSlideMotionClass = (index: number) => {
    if (activeIndex === index) {
      return "translate-x-0 opacity-100";
    }

    if (previousIndex === index) {
      return direction === "next"
        ? "pointer-events-none -translate-x-full opacity-0"
        : "pointer-events-none translate-x-full opacity-0";
    }

    return direction === "next"
      ? "pointer-events-none translate-x-full opacity-0"
      : "pointer-events-none -translate-x-full opacity-0";
  };

  return (
    <section className="hero-slider relative min-h-[70svh] overflow-hidden bg-black text-white xl:min-h-[calc(100svh-92px)]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#20A1C9]/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#20A1C9]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto flex min-h-[700svh] w-full max-w-[1620px] flex-col px-4 pb-8 pt-20 sm:pt-24 md:px-8 xl:min-h-[calc(100svh-92px)] xl:py-8">
        <div className="flex flex-1 items-center justify-center py-6 sm:py-10 xl:py-0">
          <div className="mx-auto w-full max-w-6xl text-center">
            <div className="mb-8 flex justify-center sm:mb-10 xl:mb-7">
              <div className="inline-flex items-center gap-3 px-3 py-2 sm:gap-4 sm:px-7 sm:py-3">
                <span className="h-px w-7 bg-[#20A1C9] sm:w-10" />
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white sm:text-xs">
                  {activeSlide.eyebrow}
                </span>
                <span className="h-px w-7 bg-[#20A1C9] sm:w-10" />
              </div>
            </div>

            <div className="grid">
              {slides.map((slide, index) => (
                <div
                  key={`${slide.title}-${index}`}
                  className={`col-start-1 row-start-1 flex flex-col items-center justify-start transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform xl:justify-center ${getSlideMotionClass(index)}`}
                >
                  <h1 className="max-w-[23rem] text-center text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:max-w-4xl sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]">
                    {slide.title}
                    <br />
                    <span className="text-primary">{slide.highlight}</span>
                  </h1>

                  <p className="mx-auto mt-7 max-w-2xl text-sm font-medium leading-7 text-white/75 sm:text-lg lg:mt-6 lg:text-xl">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:mt-8 lg:gap-4">
                    {slide.primaryButton && (
                      <Link
                        href={slide.primaryButton.href}
                        className="group relative inline-flex min-h-11 min-w-[140px] items-center justify-center gap-2 overflow-hidden rounded-full border border-[#20A1C9] px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white sm:min-h-12 sm:min-w-[150px] sm:px-7 sm:py-4 sm:tracking-[0.22em]"
                      >
                        <span className="absolute inset-0 -translate-x-full bg-[#20A1C9] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                        <span className="relative z-10">
                          {slide.primaryButton.label}
                        </span>
                        <ArrowUpRight className="relative z-10 h-4 w-4" />
                      </Link>
                    )}

                    {slide.secondaryButton && (
                      <Link
                        href={slide.secondaryButton.href}
                        className="group relative inline-flex min-h-11 min-w-[140px] items-center justify-center overflow-hidden rounded-full border border-white/25 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white sm:min-h-12 sm:min-w-[150px] sm:px-7 sm:py-4 sm:tracking-[0.22em]"
                      >
                        <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                          {slide.secondaryButton.label}
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 hidden items-center justify-between gap-2 rounded-full bg-white/[0.045] p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:mt-6 sm:flex sm:gap-3 sm:rounded-none sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0">
          <div className="flex min-w-0 flex-1 items-center justify-between gap-2 px-2 py-1.5 sm:w-auto sm:min-w-[300px] sm:flex-none sm:justify-start sm:gap-4 sm:px-5 sm:py-4">
            <span className="text-xs font-bold tracking-[0.25em] text-white">
              {formatNumber(activeIndex + 1)}
            </span>

            <div className="flex flex-1 items-center gap-2 sm:w-48 sm:flex-none">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    goToSlide(index, index > activeIndex ? "next" : "previous")
                  }
                  aria-label={`Go to slide ${index + 1}`}
                  className="group h-5 flex-1"
                >
                  <span className="block h-px w-full bg-white/20">
                    <span
                      className={`block h-px bg-[#20A1C9] transition-all duration-500 ${
                        activeIndex === index ? "w-full" : "w-0"
                      }`}
                    />
                  </span>
                </button>
              ))}
            </div>

            <span className="text-xs font-bold tracking-[0.25em] text-white">
              {formatNumber(totalSlides)}
            </span>
          </div>

          <div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-3 sm:px-5 sm:py-3">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous slide"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] transition-all duration-300 hover:border-[#20A1C9] hover:bg-[#20A1C9] sm:h-11 sm:w-11"
            >
              <ArrowLeft className="h-4 w-4 text-white transition-transform duration-300 group-hover:-translate-x-1" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next slide"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#20A1C9] bg-[#20A1C9] transition-all duration-300 hover:bg-transparent sm:h-11 sm:w-11"
            >
              <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
