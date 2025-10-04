import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, FileText, Users, Eye, MessageCircle } from "lucide-react";

export default function CompliancePage() {
  return (
    <>
      <HeroSection
        title="Marketing & Regulatory Standards"
        subtitle="Fair-balance language, no clinical claims without citation, and permission-based outreach."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-slate">
              VantagePoint maintains rigorous marketing and regulatory standards to ensure all communications are fair, balanced, and compliant with healthcare industry regulations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-fog py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-navy">
              Our Standards
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                  <FileText className="h-6 w-6 text-teal" aria-hidden="true" />
                </div>
                <CardTitle>Fair-Balance Language</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate">
                  All marketing materials present balanced information, acknowledging both benefits and limitations of medical devices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                  <ShieldCheck className="h-6 w-6 text-teal" aria-hidden="true" />
                </div>
                <CardTitle>No Clinical Claims Without Citation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate">
                  All efficacy or outcome claims are supported by peer-reviewed literature and clearly cited.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                  <Users className="h-6 w-6 text-teal" aria-hidden="true" />
                </div>
                <CardTitle>Permission-Based Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate">
                  All email and direct marketing communications comply with CAN-SPAM and TCPA regulations with clear opt-out mechanisms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                  <MessageCircle className="h-6 w-6 text-teal" aria-hidden="true" />
                </div>
                <CardTitle>HCP-Only Gating</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate">
                  Sensitive educational content is gated behind appropriate professional verification when required.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                  <Eye className="h-6 w-6 text-teal" aria-hidden="true" />
                </div>
                <CardTitle>No PHI Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate">
                  We do not collect, store, or process protected health information in any of our marketing programs or materials.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                  <FileText className="h-6 w-6 text-teal" aria-hidden="true" />
                </div>
                <CardTitle>Review Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate">
                  All published materials undergo medical, legal, and regulatory review before distribution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy">
            Our Commitment
          </h2>
          <p className="mt-6 text-lg text-slate">
            Standards: fair balance, no off-label, HCP-appropriate content, no PHI in forms.
          </p>
        </div>
      </section>
    </>
  );
}
