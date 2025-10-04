import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ResourceCard } from "@/components/resource-card";
import { PrimerTile } from "@/components/primer-tile";
import {
  ClipboardList,
  SlidersHorizontal,
  ShieldCheck,
  Building2,
  Factory,
  ActivitySquare,
  Watch,
} from "lucide-react";

const mostRequested = [
  {
    icon: <ClipboardList className="h-6 w-6 text-teal" aria-hidden="true" />,
    title: "Measurement definitions",
    summary:
      "Leading indicators for post-code commercialization—what we track and why.",
    href: "/resources/measurement-definitions",
  },
  {
    icon: <SlidersHorizontal className="h-6 w-6 text-teal" aria-hidden="true" />,
    title: "Buyer journey map",
    summary:
      "Decision units across hospital, ASC, and IDN—and how to reach each.",
    href: "/resources/buyer-journey-map",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-teal" aria-hidden="true" />,
    title: "Value analysis essentials",
    summary: "What procurement and committees need to proceed.",
    href: "/resources/value-analysis-essentials",
  },
];

const programPrimers = [
  {
    icon: <Building2 className="h-5 w-5 text-teal" aria-hidden="true" />,
    title: "IDN penetration",
    blurb: "How we coordinate multi-facility entry.",
    href: "/programs/idn-penetration",
  },
  {
    icon: <Factory className="h-5 w-5 text-teal" aria-hidden="true" />,
    title: "ASC market entry",
    blurb: "Economics, scheduling, and workflows.",
    href: "/programs/asc-market-entry",
  },
  {
    icon: <ActivitySquare className="h-5 w-5 text-teal" aria-hidden="true" />,
    title: "Diagnostics rollout",
    blurb: "From buyer journey to value analysis.",
    href: "/programs/diagnostics-rollout",
  },
  {
    icon: <Watch className="h-5 w-5 text-teal" aria-hidden="true" />,
    title: "Remote monitoring growth",
    blurb: "Enrollment, review cadence, adherence.",
    href: "/programs/remote-monitoring-growth",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-teal/20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Resources
            </h1>
            <p className="mt-6 text-lg leading-8 text-fog">
              Short, practical explainers for device commercialization. No
              downloads—ask for a walkthrough when you're ready.
            </p>
          </div>
        </div>
      </section>

      {/* Most requested */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-navy">
              Most requested
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {mostRequested.map((resource) => (
              <ResourceCard key={resource.href} {...resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Program primers */}
      <section className="bg-fog py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-navy">
              Program primers
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {programPrimers.map((primer) => (
              <PrimerTile key={primer.href} {...primer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-lg text-slate">Prefer a live walkthrough?</p>
          <div className="mt-6">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Talk to our team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}