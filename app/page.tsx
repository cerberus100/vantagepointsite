import Link from "next/link";
import { Hero } from "@/components/hero";
import { AssuranceShowcase } from "@/components/assurance-showcase";
import { MilestoneTimeline } from "@/components/milestone-timeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Target,
  FolderCog,
  GraduationCap,
  Rocket,
  BarChart3,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";


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

      {/* Assurance Showcase */}
      <section className="bg-fog">
        <AssuranceShowcase />
      </section>

      {/* Partnership Timeline */}
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
              Inspect how we run post-code commercialization—education for buyers, 
              compliant outreach, and warm handoffs—before your numbers exist.
            </p>
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
                  Diagnostics & Point-of-Care Testing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate">
                  Framework for post-code commercialization of diagnostic devices in clinic and hospital settings. Includes account targeting, value analysis support, and warm handoff processes.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="text-xs text-slate">
                    Barriers: Workflow, Training, Documentation
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/programs">
                Browse all programs
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