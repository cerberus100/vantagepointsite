"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "Commercial Acceleration",
    href: "/solutions/commercial-acceleration",
    description: "Market access, HCP engagement, field enablement",
  },
  {
    title: "Education Programs",
    href: "/solutions/education-programs",
    description: "CME/CE design, KOL development, cohort analytics",
  },
  {
    title: "Patient Pathways",
    href: "/solutions/patient-pathways",
    description: "Provider finder, eligibility flows, coverage support",
  },
  {
    title: "Data & Insights",
    href: "/solutions/data-insights",
    description: "Dashboards, campaign attribution, compliance audit trails",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">VantagePoint</span>
            <span className="text-2xl font-bold text-navy">VantagePoint</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate hover:text-navy"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
              aria-expanded={solutionsOpen}
            >
              Solutions
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  solutionsOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>

            {solutionsOpen && (
              <div
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-slate/5"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <div className="p-4">
                  {solutions.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-fog"
                    >
                      <div className="flex-auto">
                        <span className="block font-semibold text-navy">
                          {item.title}
                          <span className="absolute inset-0" />
                        </span>
                        <p className="mt-1 text-slate">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/programs"
            className="text-sm font-semibold leading-6 text-slate hover:text-navy"
          >
            Programs & Blueprints
          </Link>
          <Link
            href="/resources"
            className="text-sm font-semibold leading-6 text-slate hover:text-navy"
          >
            Resources
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-slate hover:text-navy"
          >
            About
          </Link>
          <Link
            href="/compliance"
            className="text-sm font-semibold leading-6 text-slate hover:text-navy"
          >
            Compliance
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild variant="gold">
            <Link href="/contact">Talk to Our Team</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10" />
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold text-navy">
                  VantagePoint
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <div className="px-3 py-2 text-base font-semibold leading-7 text-navy">
                      Solutions
                    </div>
                    {solutions.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate hover:bg-fog"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/programs"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate hover:bg-fog"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Programs & Blueprints
                  </Link>
                  <Link
                    href="/resources"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate hover:bg-fog"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resources
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate hover:bg-fog"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/compliance"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate hover:bg-fog"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Compliance
                  </Link>
                </div>
                <div className="py-6">
                  <Button asChild variant="gold" className="w-full">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Talk to Our Team
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
