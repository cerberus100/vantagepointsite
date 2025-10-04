"use client";

import { useState } from "react";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import devices from "@/content/devices.json";

const pillars = [
  {
    slug: "account-based-commercialization",
    title: "Account-Based Commercialization",
    description:
      "Strategic targeting and relationship building with hospitals, IDNs, ASCs, and large provider groups.",
    icon: "Target",
    deliverables: [
      "Account prioritization matrix",
      "Key stakeholder mapping",
      "Value proposition development",
      "ROI modeling and justification",
      "Executive presentation decks",
    ],
    artifacts: [
      "value-analysis-dossier-outline",
      "gpo-idn-map",
      "roi-calculator",
      "executive-brief",
    ],
  },
  {
    slug: "clinician-education",
    title: "Clinician Education",
    description:
      "Evidence-based education programs that build clinical confidence and drive adoption.",
    icon: "GraduationCap",
    deliverables: [
      "CME/CE accredited content",
      "Microlearning modules",
      "Case-based scenarios",
      "Assessment tools",
      "Faculty development",
    ],
    artifacts: [
      "education-brief",
      "microlearning-storyboard",
      "assessment-framework",
      "faculty-guide",
    ],
  },
  {
    slug: "access-contracts-ops",
    title: "Access & Contracts Operations",
    description:
      "Coverage strategy, contracting support, and reimbursement optimization.",
    icon: "FolderCog",
    deliverables: [
      "Coverage landscape analysis",
      "Coding and billing guides",
      "Contract negotiation support",
      "Prior authorization tools",
      "Value analysis dossier",
    ],
    artifacts: [
      "coding-coverage-brief",
      "contract-template",
      "prior-auth-guide",
      "value-analysis-template",
    ],
  },
  {
    slug: "workflow-enablement",
    title: "Workflow Enablement",
    description:
      "EMR integration, order sets, and clinic-day tools for seamless adoption.",
    icon: "Wrench",
    deliverables: [
      "EMR order set templates",
      "Clinic workflow mapping",
      "Implementation checklists",
      "Training materials",
      "Go-live support",
    ],
    artifacts: [
      "emr-template",
      "clinic-day-checklist",
      "implementation-guide",
      "training-deck",
    ],
  },
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    description:
      "Real-time dashboards and reporting for measuring adoption and ROI.",
    icon: "BarChart3",
    deliverables: [
      "Adoption dashboard setup",
      "Leading indicator tracking",
      "ROI modeling",
      "Executive reporting",
      "Optimization recommendations",
    ],
    artifacts: [
      "dashboard-spec",
      "reporting-framework",
      "roi-model",
      "optimization-plan",
    ],
  },
];

export default function SolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPillars = selectedCategory === "all"
    ? pillars
    : pillars.filter(pillar => pillar.slug === selectedCategory);

  return (
    <>
      <HeroSection
        title="Post-Code Commercialization Solutions"
        subtitle="Five integrated pillars for accelerating provider adoption after coding is in place."
      />

      <section className="border-b border-slate/10 bg-fog py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate">
            For device companies with cleared products and active HCPCS/CPT/DRG codes.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-teal text-white"
                    : "bg-fog text-slate hover:bg-slate/10"
                }`}
              >
                All Pillars
              </button>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPillars.map((pillar) => (
              <Card key={pillar.slug} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-slate mb-6">{pillar.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-navy mb-2">
                        Key Deliverables
                      </h4>
                      <ul className="space-y-1 text-sm text-slate">
                        {pillar.deliverables.slice(0, 3).map((deliverable, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ArrowRight className="h-3 w-3 flex-shrink-0 text-teal mt-0.5" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full group">
                    <Link href={`/solutions/${pillar.slug}`}>
                      Explore Pillar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fog py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy">
            Ready to accelerate adoption?
          </h2>
          <p className="mt-4 text-lg text-slate">
            Let's discuss which pillars align with your device and market
            goals.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
