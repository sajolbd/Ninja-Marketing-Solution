"use client";

import { Star, MessageSquare } from "lucide-react";
import TypingTitle from "components/layout/TypingTitle";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  platform: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Ninja Marketing Solution delivered a platform and search strategy that finally matches the premium quality our buyers expect. The integration of high-end design, technical SEO, and lead automation produced exactly the digital flagship a four-decade real estate developer requires.",
    author: "Sabbir Nasir",
    role: "Marketing Director",
    company: "Regent Property Group",
    rating: 5,
    platform: "Google"
  },
  {
    quote: "They didn't just manage our ads — they built our entire daily acquisition engine. Scaling from irregular order flow to consistent, profitable daily sales changed how we plan inventory and operate as a growing business in Canada.",
    author: "Amina Rahman",
    role: "E-Commerce Founder",
    company: "Shurobhi Heritage",
    rating: 5,
    platform: "Google"
  },
  {
    quote: "Working with their design and development pods was a seamless experience. The integration depth with our registry systems combined with a data-driven conversion path has built the foundation for thousands of transactions.",
    author: "Kristian Haugen",
    role: "Product Lead",
    company: "Biil.no Norway",
    rating: 5,
    platform: "LinkedIn Verified"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white md:py-24">
      {/* Background spotlights */}
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#20A1C9]/5 blur-[120px]" />

      <div className="mx-auto w-full max-w-[1620px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#20A1C9]" />
            <span className="text-xs font-bold uppercase tracking-[0.32em] text-white/45">
              Testimonials
            </span>
            <span className="h-px w-10 bg-[#20A1C9]" />
          </div>
          <TypingTitle
            as="h2"
            className="text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
          >
            Rated 5.0 / 5 across platforms
          </TypingTitle>
          <p className="mt-4 text-sm font-semibold tracking-[0.25em] text-[#20A1C9] uppercase">
            Real Reviews. Real Business Outcomes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#20A1C9] hover:bg-[#20A1C9]/5 md:p-8"
            >
              <div className="absolute -left-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-[#20A1C9]/50 group-hover:bg-[#20A1C9] group-hover:text-black transition-all">
                <MessageSquare className="h-4 w-4" />
              </div>

              <div className="mt-4">
                {/* Star rating */}
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, starIdx) => (
                    <Star key={starIdx} className="h-4 w-4 fill-amber-400 stroke-none" />
                  ))}
                </div>
                
                <p className="mt-6 text-sm leading-relaxed text-white/70 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 border-t border-white/5 pt-6">
                <h4 className="font-bold text-white uppercase text-sm">
                  {t.author}
                </h4>
                <div className="mt-1 flex items-center justify-between text-xs text-white/40">
                  <span>
                    {t.role}, <span className="text-white/60">{t.company}</span>
                  </span>
                  <span className="font-bold text-[#20A1C9] uppercase tracking-wider text-[10px]">
                    {t.platform}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
