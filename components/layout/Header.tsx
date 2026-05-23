"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

type HeaderProps = {
  logoSrc?: string;
};

export default function Header({
  logoSrc = "/images/logo-transparent.png",
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname?.startsWith(href);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 xl:sticky ${
          isScrolled
            ? "bg-black/80 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "bg-black/95"
        }`}
      >
        <nav className="mx-auto flex h-20 w-full max-w-[1620px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[92px] lg:px-8">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="group relative z-50 flex min-w-0 items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]">
              <Image
                src={logoSrc}
                alt="Ninja Marketing Solution logo"
                width={256}
                height={256}
                priority
                sizes="(min-width: 1024px) 72px, (min-width: 640px) 64px, 56px"
                className="h-full w-full object-contain"
              />
            </span>

            <span className="hidden min-w-0 leading-none sm:block">
              <span className="block text-sm font-bold uppercase tracking-[0.24em] text-white lg:text-base">
                Ninja
              </span>
              <span className="mt-1 block whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.26em] text-[#20A1C9] lg:text-[11px]">
                Marketing Solution
              </span>
            </span>
          </Link>

          <div className="hidden items-center rounded-full bg-white/[0.05] p-1.5 shadow-[0_18px_46px_rgba(0,0,0,0.22)] backdrop-blur-xl xl:flex">
            {menuItems.map((item, index) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative flex h-11 items-center gap-2 overflow-hidden rounded-full px-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                    active
                      ? "bg-[#20A1C9] text-black shadow-[0_0_26px_rgba(32,161,201,0.28)]"
                      : "text-white/60 hover:bg-white/[0.07] hover:text-white"
                  }`}
                >
                  <span
                    className={`text-[9px] tracking-[0.1em] transition-colors duration-300 ${
                      active ? "text-black/55" : "text-[#20A1C9]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden xl:block">
            <Link
              href="/contact"
              className="group relative inline-flex h-12 items-center gap-3 overflow-hidden rounded-full border border-[#20A1C9] px-5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_32px_rgba(32,161,201,0.2)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#20A1C9] transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <span className="relative z-10">Start Project</span>
              <ArrowUpRight
                aria-hidden="true"
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="relative z-50 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-white shadow-[0_12px_28px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-[#20A1C9]/25 xl:hidden"
          >
            <Menu
              aria-hidden="true"
              className={`absolute h-5 w-5 transition-all duration-300 ${
                isOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X
              aria-hidden="true"
              className={`absolute h-5 w-5 transition-all duration-300 ${
                isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 origin-top bg-black transition-[clip-path,opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100 [clip-path:inset(0_0_0_0)]"
            : "pointer-events-none -translate-y-4 opacity-0 [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="relative flex min-h-screen flex-col justify-between overflow-hidden px-4 pb-7 pt-28 sm:px-6 lg:px-8">
          <div
            className={`relative z-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#20A1C9] sm:text-xs">
                Menu
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40 sm:text-xs">
                Ninja Route
              </span>
            </div>

            <div className="space-y-1">
              {menuItems.map((item, index) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    style={{
                      transitionDelay: isOpen ? `${90 + index * 70}ms` : "0ms",
                    }}
                    className={`group flex items-center justify-between gap-3 rounded-3xl px-1 py-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-5 sm:px-2 sm:py-3 ${
                      isOpen
                        ? "translate-y-0 opacity-100 blur-0"
                        : "translate-y-8 opacity-0 blur-sm"
                    } ${
                      active
                        ? "text-[#20A1C9]"
                        : "text-white hover:text-[#20A1C9]"
                    }`}
                  >
                    <span className="flex min-w-0 items-baseline gap-3 sm:gap-5">
                      <span
                        className={`w-8 shrink-0 text-[10px] font-bold tracking-[0.22em] transition-colors duration-300 sm:text-xs ${
                          active ? "text-[#20A1C9]" : "text-white/30"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="truncate text-[clamp(1.75rem,7.2vw,2.8rem)] font-bold uppercase leading-[0.92] tracking-normal sm:text-[clamp(2.25rem,6.8vw,4rem)]">
                        {item.label}
                      </span>
                    </span>

                    <ArrowUpRight
                      aria-hidden="true"
                      className={`h-6 w-6 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        active ? "text-[#20A1C9]" : "text-white/35"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          <div
            className={`relative z-10 mt-8 grid gap-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:grid-cols-[1fr_auto] sm:items-end ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
                Let&apos;s build something bold
              </p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/60">
                Strategy, design, development, and marketing crafted for real
                business growth.
              </p>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="group relative inline-flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-[#20A1C9] px-7 text-xs font-bold uppercase tracking-[0.2em] text-white sm:w-fit"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#20A1C9] transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <span className="relative z-10">Start Project</span>
              <ArrowUpRight aria-hidden="true" className="relative z-10 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
