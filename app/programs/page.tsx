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
  Stethoscope,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const programs = [
  {
    id: "hcp-education",
    icon: GraduationCap,
    title: "HCP Education Programs",
    description:
      "Accredited CME/CE programs that build clinical confidence and drive device adoption through evidence-based learning.",
    deliverables: [
      "Accredited CME/CE content",
      "Multi-channel delivery",
      "Assessment tools",
      "Completion tracking",
    ],
    href: "/programs/hcp-education",
  },
  {
    id: "field-enablement",
    icon: Users,
    title: "Field Enablement",
    description:
      "Equip your sales and clinical teams with the tools, training, and resources to effectively educate healthcare providers.",
    deliverables: [
      "Sales training modules",
      "Clinical talking points",
      "Objection handling",
      "ROI calculators",
    ],
    href: "/programs/field-enablement",
  },
  {
    id: "patient-pathways",
    icon: Target,
    title: "Patient Pathways",
    description:
      "Design and implement patient education and support programs that improve outcomes and device utilization.",
    deliverables: [
      "Patient education materials",
      "Support program design",
      "Adherence strategies",
      "Outcome tracking",
    ],
    href: "/programs/patient-pathways",
  },
  {
    id: "data-insights",
    icon: BarChart3,
    title: "Data & Insights",
    description:
      "Real-time dashboards and analytics that measure program effectiveness and demonstrate ROI.",
    deliverables: [
      "Custom dashboards",
      "Campaign attribution",
      "Compliance reporting",
      "Predictive analytics",
    ],
    href: "/programs/data-insights",
  },
  {
    id: "surgical-training",
    icon: Stethoscope,
    title: "Surgical Training",
    description:
      "Hands-on training programs for surgical devices including simulation, proctoring, and certification.",
    deliverables: [
      "Simulation training",
      "Proctoring programs",
      "Certification pathways",
      "Skills assessment",
    ],
    href: "/programs/surgical-training",
  },
  {
    id: "outcomes-tracking",
    icon: TrendingUp,
    title: "Outcomes Tracking",
    description:
      "Registry design and real-world evidence collection to demonstrate device effectiveness and safety.",
    deliverables: [
      "Registry design",
      "Data collection tools",
      "Outcomes analysis",
      "Publication support",
    ],
    href: "/programs/outcomes-tracking",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <HeroSection
        title="Programs & Blueprints"
        subtitle="Proven frameworks for accelerating medical device adoption through education, enablement, and evidence."
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
                  <Button
                    asChild
                    variant="link"
                    className="mt-6 p-0 text-teal group"
                  >
                    <Link href={program.href}>
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
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
