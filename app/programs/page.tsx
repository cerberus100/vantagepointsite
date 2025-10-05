import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Users,
  TrendingUp,
  BarChart3,
  Target,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const programs = [
  {
    id: "field-enablement",
    icon: Users,
    title: "Field Enablement",
    description:
      "Buyer outreach & warm handoffs (no clinical training). Equip your team to reach the right decision units and turn interest into scheduled meetings.",
    deliverables: [
      "Buyer briefs for decision units",
      "Outreach sequences with talk tracks",
      "Meeting kits and handoff SOPs",
      "Calendar and routing patterns",
    ],
    href: "/programs/field-enablement",
  },
  {
    id: "hcp-education-programs",
    icon: GraduationCap,
    title: "HCP Education Programs",
    description:
      "Non-clinical product knowledge & awareness. Concise education that builds awareness and answers what clinicians and admins need to proceed.",
    deliverables: [
      "Evidence digest with references",
      "Indications/contraindications overview",
      "Documentation & coverage checklist",
      "EMR request templates",
    ],
    href: "/programs/hcp-education-programs",
  },
  {
    id: "patient-pathways",
    icon: Target,
    title: "Patient Pathways",
    description:
      "Education and process to support scheduling and adherence. Make it easy for clinics to educate patients and move them through scheduling.",
    deliverables: [
      "Plain-language patient info sheets",
      "Scheduling scripts and summaries",
      "Tracking sheets for adherence",
      "Content handoff for review",
    ],
    href: "/programs/patient-pathways",
  },
  {
    id: "data-insights",
    icon: BarChart3,
    title: "Data & Insights",
    description:
      "Clean reporting on adoption indicators (no PHI). See what's moving with clear reporting so you can steer programs with confidence.",
    deliverables: [
      "Weekly rollup of leading indicators",
      "Program dashboards",
      "Read-outs with risks and blockers",
      "Simple data dictionary",
    ],
    href: "/programs/data-insights",
  },
  {
    id: "outcomes-tracking",
    icon: TrendingUp,
    title: "Reporting & Analytics",
    description:
      "Adoption reporting over time (leading indicators only). Track adoption without claiming clinical outcomes—focus on business indicators.",
    deliverables: [
      "Trend views by account/region",
      "Pipeline view of decision stages",
      "Monthly read-outs",
      "Program adjustments",
    ],
    href: "/programs/outcomes-tracking",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <HeroSection
        title="Programs & Blueprints"
        subtitle="Practical frameworks for growing provider adoption through buyer education and compliant outreach."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-navy">
              Comprehensive Program Portfolio
            </h2>
            <p className="mt-4 text-lg text-slate">
              Each program is designed to address specific adoption barriers
              with measurable outcomes and clear deliverables.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {programs.map((program) => (
              <Card
                key={program.id}
                className="flex flex-col transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                    <program.icon
                      className="h-6 w-6 text-teal"
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-slate">{program.description}</p>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-navy">
                      Key Deliverables
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {program.deliverables.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ArrowRight
                            className="h-4 w-4 flex-shrink-0 text-teal"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-slate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How these programs work */}
      <section className="bg-fog py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold text-navy">
              How these programs work
            </h3>
            <p className="mt-4 text-lg text-slate">
              High-level overviews only. If a program fits, we'll share details on a call.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy">
            Ready to design your program?
          </h2>
          <p className="mt-4 text-lg text-slate">
            Let's discuss which programs align with your device and market goals.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Inquire about our programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
