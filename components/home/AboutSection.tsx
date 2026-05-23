"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";

type AboutSectionProps = {
  founderImage?: string;
};

export default function AboutSection({
  founderImage = "/founder.jpg",
}: AboutSectionProps) {
  return (
    <section className="relative overflow-hidden bg-black py-8 text-white  lg:py-16">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#20A1C9]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#20A1C9]/10 blur-[130px]" />

      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="mb-10 flex items-center gap-4">
              <span className="text-xs font-bold tracking-[0.28em] text-[#20A1C9]">
                01
              </span>

              <span className="h-px w-10 bg-primary" />

              <span className="text-xs font-bold uppercase tracking-[0.32em] text-white/45">
                About Ninja
              </span>
            </div>

            <TypingTitle
              as="h2"
              className="max-w-2xl text-[clamp(2.7rem,6vw,6.2rem)] font-medium uppercase leading-[1.08] tracking-[0.055em] text-3xl text-white sm:max-w-4xl sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
            >
              A Digital
              <br />
              Marketing
              <br />
              Agency{" "}
              <span className="text-[#20A1C9]">
                Built In
                <br />
                Bangladesh.
              </span>
            </TypingTitle>

            <div className="mt-12 flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#20A1C9]/50 bg-white/10 sm:h-16 sm:w-16">
                <Image
                  src={founderImage}
                  alt="Jayed Islam"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-white/35 sm:text-xs">
                  Founder & CEO
                </p>
                <p className="mt-1 text-base font-medium text-white sm:text-lg">
                  Jayed Islam
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="max-w-3xl">
              <p className="text-base font-medium leading-8 text-white/75 sm:text-lg sm:leading-9 lg:text-xl lg:leading-10">
                <strong className="font-semibold text-white">
                  Ninja Marketing Solution
                </strong>{" "}
                — a performance-focused digital marketing agency in Bangladesh,
                built to help ambitious brands grow with strategy, creativity,
                and measurable execution. We work with businesses that want more
                than just online visibility — they want real brand awareness,
                quality leads, stronger customer engagement, and consistent
                business growth.
              </p>

              <p className="mt-6 text-base font-medium leading-8 text-white/65 sm:text-lg sm:leading-9">
                From social media marketing, paid advertising, SEO, content
                planning, branding, and creative campaigns to complete digital
                growth support, Ninja Marketing Solution brings everything under
                one roof. Our process is simple: understand your business, build
                the right strategy, create content that connects, and run
                campaigns that convert.
              </p>

              <p className="mt-6 text-base font-medium leading-8 text-white/65 sm:text-lg sm:leading-9">
                Whether you are launching a new brand, scaling an existing
                business, or improving your online presence, we act like your
                dedicated growth partner — focused on clarity, consistency, and
                results.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/about"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-[#20A1C9] px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-[#20A1C9] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative z-10">View Full About</span>
                <ArrowUpRight className="relative z-10 h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Book A Call
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Large Faded Text */}
      <div className="pointer-events-none absolute bottom-[-0.25em] right-0 hidden text-[12vw] font-bold uppercase leading-none tracking-[-0.08em] text-white/[0.025] lg:block">
        Ninja
      </div>
    </section>
  );
}
