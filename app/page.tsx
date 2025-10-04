import Link from "next/link";
import { Hero } from "@/components/hero";
import { AssuranceStack } from "@/components/assurance-stack";
import { MilestoneTimeline } from "@/components/milestone-timeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShieldCheck,
  ClipboardCheck,
  Target,
  FolderCog,
  GraduationCap,
  Rocket,
  BarChart3,
  ArrowRight,
  Boxes,
} from "lucide-react";

const assuranceItems = [
  {
    icon: <ClipboardCheck className="h-6 w-6 text-teal" aria-hidden="true" />,
    title: "How we partner",
    summary:
      "Target → Access → Educate → Launch → Measure. Clear scopes and handoffs.",
    popover: {
      heading: "Our process",
      bullets: [
        "Target: Account mapping and buyer identification",
        "Access: Value analysis support and GPO/IDN alignment",
        "Educate: Evidence summaries and product knowledge briefs",
        "Launch: Email sequences and warm handoffs to sales",
        "Measure: Leading indicators and monthly read-outs",
      ],
    },
  },
  {
    icon: <Boxes className="h-6 w-6 text-teal" aria-hidden="true" />,
    title: "What we deliver",
    summary:
      "Buyer education, compliant outreach, value-analysis support, workflow requests.",
    popover: {
      heading: "Deliverables",
      bullets: [
        "Value analysis dossier outlines",
        "Coding and coverage briefs",
        "HCP education materials",
        "EMR order-set templates",
        "Vendor onboarding documentation",
      ],
    },
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-teal" aria-hidden="true" />,
    title: "What we measure",
    summary:
      "Meetings booked, EMR order-set requests, VAC submissions, contracting progress.",
    popover: {
      heading: "Leading indicators",
      bullets: [
        "Meetings booked (and show rate)",
        "Qualified meetings (ICP + intent)",
        "Value analysis committee submissions",
        "EMR order-set activation requests",
        "Contract stage progression",
        "Days to first PO",
      ],
    },
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-teal" aria-hidden="true" />,
    title: "Standards",
    summary:
      "Fair-balance language, no off-label, no PHI in forms.",
    popover: {
      heading: "Compliance guardrails",
      bullets: [
        "No clinical claims without citation",
        "No off-label promotion",
        "Permission-based outreach (CAN-SPAM/TCPA)",
        "No PHI collection in forms",
        "HCP-only gating when needed",
      ],
    },
  },
];

const partnershipSteps = [
  {
    icon: <Target className="h-8 w-8 text-teal" aria-hidden="true" />,
    label: "Target",
    description:
      "Account targeting and buyer mapping for hospitals, IDNs, ASCs, and large provider groups.",
  },
  {
    icon: <FolderCog className="h-8 w-8 text-teal" aria-hidden="true" />,
    label: "Access",
    description:
      "Value analysis dossier outline, coding/coverage brief, and GPO/IDN alignment.",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-teal" aria-hidden="true" />,
    label: "Educate",
    description:
      "Evidence summaries, product knowledge briefs, and evaluator education materials.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-teal" aria-hidden="true" />,
    label: "Launch",
    description:
      "Email outreach sequences, HCP portal setup, and warm handoffs to sales teams.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-teal" aria-hidden="true" />,
    label: "Measure",
    description:
      "Leading indicators: meetings booked, value analysis submissions, first PO dates.",
  },
];

const milestonePhases = [
  {
    label: "Days 1-30: Target & Access",
    range: "Foundation",
    bullets: [
      "Account targeting and buyer mapping",
      "Stakeholder interviews (clinicians, admin, supply chain)",
      "Coverage and reimbursement review",
      "Value analysis dossier outline development",
      "Coding/coverage brief creation",
      "GPO/IDN alignment strategy",
    ],
  },
  {
    label: "Days 31-60: Educate & Enable",
    range: "Activation",
    bullets: [
      "Evidence brief and product knowledge materials",
      "Evaluator education content development",
      "HCP portal setup and content upload",
      "Email outreach sequence design",
      "Warm handoff process documentation",
      "Measurement dashboard configuration",
    ],
  },
  {
    label: "Days 61-90: Launch & Measure",
    range: "Go-Live",
    bullets: [
      "Email outreach sequence execution",
      "HCP portal launch and user onboarding",
      "Meeting scheduling and qualification",
      "Value analysis submission support",
      "Leading indicator tracking and reporting",
      "Month 3 optimization and expansion planning",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Your marketing and outreach partner"
        sub="We grow provider adoption after coding is in place—through clinician education, compliant outreach, and clinic-day enablement for hospitals, IDNs, ASCs, and large provider groups."
        primaryCta={{
          label: "How we partner",
          href: "/solutions",
        }}
        secondaryCta={{
          label: "Talk to our team",
          href: "/contact",
        }}
      />

      {/* Who we serve */}
      <section className="border-b border-slate/10 bg-fog py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate">
            For device companies with cleared products and active HCPCS/CPT/DRG codes.
          </p>
        </div>
      </section>

      {/* How we partner */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              How we partner
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-5">
            {partnershipSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
                  {step.icon}
                </div>
                <h3 className="mt-4 font-semibold text-navy">{step.label}</h3>
                <p className="mt-2 text-sm text-slate">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assurance Stack */}
      <section className="bg-fog py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              What you can inspect before committing
            </h2>
            <p className="mt-4 text-lg text-slate">
              No case studies? No problem. Review our frameworks, sample
              deliverables, and measurement plans.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <AssuranceStack items={assuranceItems} />
          </div>
        </div>
      </section>

      {/* 90-Day Timeline */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Partnership Timeline
            </h2>
            <p className="mt-4 text-lg text-slate">
              Three phases from discovery to go-live with clear milestones at
              each stage
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <MilestoneTimeline phases={milestonePhases} />
          </div>
        </div>
      </section>

      {/* Programs & Blueprints */}
      <section className="bg-fog py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Programs & Blueprints
            </h2>
            <p className="mt-4 text-lg text-slate">
              No case studies? No problem. Inspect how we run post-code
              commercialization—education for buyers, compliant outreach, and
              warm handoffs—before your numbers exist.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate/20 bg-white px-4 py-2 text-sm text-slate">
              <ShieldCheck
                className="h-4 w-4 text-gold"
                aria-hidden="true"
              />
              Sample program for demonstration—no client data or outcomes.
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                    Diagnostics
                  </span>
                  <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                    Point-of-Care
                  </span>
                </div>
                <CardTitle className="font-serif text-xl">
                  Commercialization Blueprint: Diagnostics & Point-of-Care Testing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate">
                  90-day framework for post-code commercialization of diagnostic devices in clinic and hospital settings. Includes account targeting, value analysis support, and warm handoff processes.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="text-xs text-slate">
                    Barriers: Workflow, Training, Documentation
                  </span>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="mt-6 w-full group"
                >
                  <Link href="/programs/diagnostics-poc">
                    View Blueprint
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/programs">
                View All Blueprints
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Ready to accelerate adoption?
          </h2>
          <p className="mt-4 text-lg text-slate">
            Explore our solutions or schedule a consultation to discuss your
            device and market.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="gold">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}