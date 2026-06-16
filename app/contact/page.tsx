"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Send, Sparkles, X, ArrowRight, ExternalLink } from "lucide-react";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";

type CaseStudyPopup = {
  client: string;
  metric: string;
  category: string;
  achievement: string;
  href: string;
};

const popupCaseStudies: CaseStudyPopup[] = [
  {
    client: "Shurobhi Coconut Oil",
    metric: "3.4X ROAS",
    category: "E-Commerce",
    achievement: "Generated a 3.4X Return on Ad Spend across Google Shopping and Meta Ads within 90 days.",
    href: "/case-studies/shurobhi"
  },
  {
    client: "PON-CAT Machinery",
    metric: "95x Sales",
    category: "B2B Marketing",
    achievement: "Scaled qualified inbound corporate leads by 95x using intent-targeted Search.",
    href: "/case-studies/pon-cat"
  },
  {
    client: "Biil.no Norway",
    metric: "2,521 Cars",
    category: "Web Engineering",
    achievement: "Processed 2,521 vehicle sales in under a year via an automated registry integration.",
    href: "/case-studies/biil-no"
  },
  {
    client: "Prime Bank Investment",
    metric: "৳5.6 Cr ROAS",
    category: "Lead Generation",
    achievement: "Acquired thousands of active investment accounts from local and NRB investors.",
    href: "/case-studies/prime-bank"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    budget: "starter",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  // Popup state
  const [popupIndex, setPopupIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show first popup after 3 seconds
    const initialShowTimer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(initialShowTimer);
  }, [dismissed]);

  useEffect(() => {
    if (dismissed || !showPopup) return;

    // Hide the current popup after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowPopup(false);
      // Move to next case study after it hides
      setTimeout(() => {
        setPopupIndex((prev) => (prev + 1) % popupCaseStudies.length);
        setShowPopup(true);
      }, 4000); // Wait 4 seconds before showing the next one
    }, 8000);

    return () => clearTimeout(hideTimer);
  }, [showPopup, dismissed]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Standard form submission feedback
    setTimeout(() => {
      setFormData({ name: "", email: "", website: "", budget: "starter", message: "" });
      setSubmitted(false);
    }, 4000);
  };

  const currentPopup = popupCaseStudies[popupIndex];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white py-12 md:py-24">
      {/* Background Cyber Glowing Accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#20A1C9]/5 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#20A1C9]/5 blur-[150px]" />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          <Link href="/" className="transition-colors hover:text-[#20A1C9]">
            Home
          </Link>
          <ChevronRightIcon className="h-3 w-3 text-white/20" />
          <span className="text-[#20A1C9]">Contact</span>
        </div>

        {/* Hero title */}
        <div className="mb-16 max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-bold tracking-[0.3em] text-[#20A1C9]">
              08 / CONTACT
            </span>
            <span className="h-px w-8 bg-white/20" />
          </div>

          <TypingTitle
            as="h1"
            className="text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
          >
            Let's design your <br />
            <span className="text-[#20A1C9]">growth playbook</span>
          </TypingTitle>

          <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
            Pick a time to speak with a senior strategist, or write to us below. We will review your conversion metrics, identify three opportunities, and share them on our call.
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Info & Details */}
          <div className="flex flex-col justify-between space-y-12 lg:col-span-5">
            <div className="space-y-8">
              <h2 className="text-xl font-bold uppercase tracking-wider text-white border-b border-white/10 pb-4">
                Office & Operations
              </h2>
              
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-[#20A1C9]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-widest text-white/40">
                    Address Location
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/80 font-medium">
                    Regina, Saskatchewan, Canada
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-[#20A1C9]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-widest text-white/40">
                    Direct Hotline
                  </h4>
                  <a
                    href="tel:+13065550199"
                    className="mt-2 block text-sm leading-relaxed text-white/80 hover:text-[#20A1C9] transition-colors font-semibold"
                  >
                    +1 (306) 555-0199
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-[#20A1C9]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-widest text-white/40">
                    E-mail Inquiry
                  </h4>
                  <a
                    href="mailto:enquiry@ninja-marketing.com"
                    className="mt-2 block text-sm leading-relaxed text-white/80 hover:text-[#20A1C9] transition-colors font-semibold"
                  >
                    enquiry@ninja-marketing.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#20A1C9]/20 bg-[#20A1C9]/5 p-6 backdrop-blur-sm">
              <h3 className="flex items-center gap-2 font-bold uppercase tracking-wider text-[#20A1C9] text-sm">
                <Sparkles className="h-4 w-4" />
                What we ship in 30 mins
              </h3>
              <ul className="mt-4 space-y-3 text-xs text-white/80">
                <li className="flex gap-2 items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#20A1C9]" />
                  Competitor ad campaign hooks analysis
                </li>
                <li className="flex gap-2 items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#20A1C9]" />
                  Mobile viewport conversion roadblocks report
                </li>
                <li className="flex gap-2 items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#20A1C9]" />
                  90-day organic traffic growth roadmap
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#20A1C9]/5 blur-2xl" />

              <h2 className="text-xl font-bold uppercase tracking-wider mb-8">
                Inquire Online
              </h2>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#20A1C9]/20 text-[#20A1C9]">
                    <CheckCircleIcon className="h-8 w-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-wide">
                    Message Shipped
                  </h3>
                  <p className="text-sm text-white/60 max-w-sm mx-auto">
                    Thanks for reaching out! A senior strategist from our Regina office will review your details and reply within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-white/40">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-white/20 transition-colors focus:border-[#20A1C9] focus:outline-none focus:bg-white/[0.04]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/40">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-white/20 transition-colors focus:border-[#20A1C9] focus:outline-none focus:bg-white/[0.04]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="website" className="text-xs font-bold uppercase tracking-widest text-white/40">
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-white/20 transition-colors focus:border-[#20A1C9] focus:outline-none focus:bg-white/[0.04]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-xs font-bold uppercase tracking-widest text-white/40">
                        Monthly Ads/SEO Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white transition-colors focus:border-[#20A1C9] focus:outline-none focus:bg-white/[0.04] appearance-none"
                      >
                        <option value="starter">Under ৳50,000 /mo</option>
                        <option value="growth">৳50,000 - ৳1,50,000 /mo</option>
                        <option value="enterprise">Over ৳1,50,000 /mo</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/40">
                      Message / Project Scope *
                      </label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Describe your project, timeline, and current marketing struggles..."
                      className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-white/20 transition-colors focus:border-[#20A1C9] focus:outline-none focus:bg-white/[0.04] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#20A1C9] py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(32,161,201,0.3)]"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* ================= CASE STUDY SPOTLIGHT POPUP ================= */}
      {showPopup && !dismissed && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm overflow-hidden rounded-2xl border border-[#20A1C9]/35 bg-black/95 p-5 shadow-[0_0_40px_rgba(32,161,201,0.2)] backdrop-blur-md transition-all duration-500 animate-in slide-in-from-bottom-5 fade-in">
          {/* Close button */}
          <button
            type="button"
            onClick={() => {
              setShowPopup(false);
              setDismissed(true);
            }}
            className="absolute right-4 top-4 text-white/40 hover:text-white transition-colors"
            aria-label="Dismiss popup"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#20A1C9]">
            <Sparkles className="h-3.5 w-3.5 fill-[#20A1C9]/20" />
            Client Success Proof
          </div>

          <div className="mt-3 flex items-baseline justify-between gap-2 border-b border-white/5 pb-3">
            <h4 className="text-base font-bold text-white uppercase truncate">
              {currentPopup.client}
            </h4>
            <span className="text-sm font-black text-[#20A1C9] shrink-0 uppercase">
              {currentPopup.metric}
            </span>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-white/70">
            {currentPopup.achievement}
          </p>

          <div className="mt-5 flex items-center justify-between gap-3 text-xs">
            <Link
              href={currentPopup.href}
              onClick={() => setShowPopup(false)}
              className="inline-flex items-center gap-1 font-bold text-[#20A1C9] hover:underline"
            >
              Read Case Study
              <ExternalLink className="h-3 w-3" />
            </Link>
            
            <button
              type="button"
              onClick={() => {
                setShowPopup(false);
                // Scroll page to the contact form smoothly
                const formEl = document.querySelector("form");
                if (formEl) {
                  formEl.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="rounded-lg bg-white/10 px-3.5 py-2 font-bold uppercase tracking-wider text-white hover:bg-[#20A1C9] hover:text-black transition-all"
            >
              Get Free Audit
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

// Inline svg icons
function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
