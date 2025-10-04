import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, FileText, MapPin, Calculator, Presentation } from "lucide-react";

const deliverables = [
  {
    icon: <FileText className="h-6 w-6 text-teal" aria-hidden="true" />,
    title: "Value Analysis Dossier Outline",
    description:
      "Structured template for building compelling value propositions for hospital value analysis committees.",
  },
  {
    icon: <MapPin className="h-6 w-6 text-teal" aria-hidden="true" />,
    title: "GPO/IDN Map",
    description:
      "Strategic mapping of group purchasing organizations and integrated delivery networks for targeted outreach.",
  },
  {
    icon: <Calculator className="h-6 w-6 text-teal" aria-hidden="true" />,
    title: "ROI Calculator",
    description:
      "Interactive tool for modeling financial impact across different adoption scenarios and time horizons.",
  },
  {
    icon: <Presentation className="h-6 w-6 text-teal" aria-hidden="true" />,
    title: "Executive Brief",
    description:
      "Concise presentation deck for C-suite stakeholders highlighting clinical and financial benefits.",
  },
];

export default function AccountBasedCommercializationPage() {
  return (
    <>
      <HeroSection
        title="Account-Based Commercialization"
        subtitle="Strategic targeting and relationship building with hospitals, IDNs, and large provider groups."
        variant="pattern"
      >
        <Button asChild size="lg" variant="gold">
          <Link href="/contact">Discuss Your Accounts</Link>
        </Button>
      </HeroSection>

      {/* Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold text-navy">
              Strategic Account Targeting
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Post-code commercialization requires strategic account targeting and relationship building with key decision-makers in hospitals, IDNs, and large provider groups. We help you identify high-potential accounts, build compelling value propositions, and navigate complex buying processes.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              Our account-based approach combines market intelligence, stakeholder mapping, and value-based selling to accelerate adoption in your most important accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-fog py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-navy">
              Key Deliverables
            </h2>
            <p className="mt-4 text-lg text-slate">
              Tools and frameworks for strategic account management
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {deliverables.map((deliverable) => (
              <Card key={deliverable.title} className="flex flex-col">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                    {deliverable.icon}
                  </div>
                  <CardTitle className="text-xl">{deliverable.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-slate">{deliverable.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold text-navy">
              Our Process
            </h2>
            <div className="mt-12 space-y-8">
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
                  <Target className="h-6 w-6 text-teal" aria-hidden="true" />
                  <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-navy">
                    Account Identification
                  </h3>
                  <p className="mt-2 text-slate">
                    Map high-potential accounts based on patient volume, physician concentration, and strategic fit with your device positioning.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
                  <FileText className="h-6 w-6 text-teal" aria-hidden="true" />
                  <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-navy">
                    Value Proposition Development
                  </h3>
                  <p className="mt-2 text-slate">
                    Build compelling value stories that resonate with different stakeholders—clinicians, administrators, and executives.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
                  <MapPin className="h-6 w-6 text-teal" aria-hidden="true" />
                  <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-navy">
                    Stakeholder Engagement
                  </h3>
                  <p className="mt-2 text-slate">
                    Orchestrate multi-touchpoint engagement strategies that build relationships and move accounts through the adoption funnel.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
                  <Calculator className="h-6 w-6 text-teal" aria-hidden="true" />
                  <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-navy">
                    ROI Modeling & Justification
                  </h3>
                  <p className="mt-2 text-slate">
                    Develop financial models that demonstrate clear ROI for different adoption scenarios and time horizons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy">
            Ready to target your key accounts?
          </h2>
          <p className="mt-4 text-lg text-slate">
            Let's discuss which accounts to prioritize and how to build compelling value stories.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Schedule Strategy Session</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
