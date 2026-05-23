"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  MapPin,
  ArrowUp,
} from "lucide-react";

const companyLinks = [
  { label: "About Ninja Marketing Solution", href: "/about" },
  { label: "Founder — Jayed Islam", href: "/founder" },
  { label: "Clients", href: "/clients" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Our Team", href: "/team" },
  { label: "Paid Media", href: "/services/paid-media" },
  { label: "Social & Content", href: "/services/social-content" },
  { label: "Web & Conversion", href: "/services/web-conversion" },
  { label: "All Services", href: "/services" },
];

const industryLinks = [
  { label: "Real Estate Marketing", href: "/industries/real-estate" },
  { label: "Healthcare Marketing", href: "/industries/healthcare" },
  { label: "E-commerce Marketing", href: "/industries/ecommerce" },
  { label: "Education Marketing", href: "/industries/education" },
  { label: "Fintech Marketing", href: "/industries/fintech" },
];

const resourceLinks = [
  { label: "Marketing Blog & Insights", href: "/blog" },
  { label: "Client Case Studies", href: "/case-studies" },
  { label: "Industries We Serve", href: "/industries" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "XML Sitemap", href: "/sitemap.xml" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

type FooterProps = {
  logoSrc?: string;
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.32em] text-white/40">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group inline-flex text-sm font-medium leading-6 text-white/70 transition-colors duration-300 hover:text-[#20A1C9] sm:text-base"
            >
              <span className="bg-gradient-to-r from-[#20A1C9] to-[#20A1C9] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-500 group-hover:bg-[length:100%_1px]">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer({ logoSrc = "/images/logo.png" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#20A1C9]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#20A1C9]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1620px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 py-14 sm:py-16 lg:grid-cols-[1.35fr_2.65fr] lg:gap-16 lg:py-20">
          <div>
            <Link
              href="/"
              aria-label="Go to homepage"
              className="inline-flex items-center "
            >
              <Image
                src={logoSrc}
                alt="Project Logo"
                width={150}
                height={54}
                className="h-auto w-[118px] object-contain sm:w-[140px]"
              />
            </Link>

            <p className="mt-7 max-w-md text-sm font-medium leading-7 text-white/65 sm:text-base">
              Ninja Marketing Solution is a digital marketing agency in Dhaka,
              Bangladesh helping brands grow through measurable strategy,
              performance media and creative.
            </p>

            {/* Address, phone number, email address  */}
            {/* <div className="mt-7 max-w-md ">
              
              <Link
                href="tel:+8801601654800"
                className="block text-sm font-semibold text-white/75 transition-colors duration-300 hover:text-[#20A1C9] sm:text-base"
              >
                +88 01601-654800
              </Link>

              <Link
                href="mailto:enquiry@ngital.com"
                className="mt-3 block text-sm font-semibold text-white/75 transition-colors duration-300 hover:text-[#20A1C9] sm:text-base"
              >
                enquiry@ngital.com
              </Link>

              
              <div className="mt-4 flex gap-3 text-sm font-medium leading-6 text-white/65 sm:text-base">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#20A1C9]" />
                <p>
                  House 88, Block-E, Road 17/A, Banani, Dhaka 1213, Bangladesh
                </p>
              </div>
            </div>  */}
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Services" links={serviceLinks} />
            <FooterColumn title="Industries" links={industryLinks} />
            <FooterColumn title="Resources" links={resourceLinks} />
            <FooterColumn title="Legal" links={legalLinks} />
          </div>
        </div>

        <div className="grid gap-8 border-b border-white/10 py-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-xs font-semibold text-white/45">
            <p>
              © {currentYear} Ninja Marketing Solution. All rights reserved.
            </p>

            <Link
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-[#20A1C9]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="transition-colors duration-300 hover:text-[#20A1C9]"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookie-policy"
              className="transition-colors duration-300 hover:text-[#20A1C9]"
            >
              Cookie Policy
            </Link>
          </div>

          <button
            type="button"
            onClick={handleBackToTop}
            className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-[#20A1C9]/70 px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white sm:w-fit"
          >
            <span className="absolute inset-0 -translate-x-full bg-[#20A1C9] transition-transform duration-500 ease-out group-hover:translate-x-0" />
            <ArrowUp className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
            <span className="relative z-10">Back To Top</span>
          </button>
        </div>

        <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
            Digital Growth Partner
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-[#20A1C9] hover:bg-[#20A1C9]"
                >
                  <Icon className="h-4 w-4 text-white/70 transition-colors duration-300 group-hover:text-white" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
