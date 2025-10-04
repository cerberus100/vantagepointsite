import { HeroSection } from "@/components/hero-section";
import { WhyUs } from "@/components/why-us";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Target, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Evidence-Driven",
    description:
      "Every program is grounded in clinical evidence and peer-reviewed research. We never compromise on scientific integrity.",
  },
  {
    icon: Users,
    title: "Clinician-Led",
    description:
      "Our team includes practicing physicians, nurses, and clinical educators who understand real-world healthcare delivery.",
  },
  {
    icon: Shield,
    title: "Compliance-First",
    description:
      "HIPAA, ACCME, and industry standards are built into every process. We maintain SOC 2 Type II certification.",
  },
  {
    icon: Award,
    title: "Outcomes-Focused",
    description:
      "We measure what matters: knowledge gains, confidence shifts, and real-world adoption. Data drives everything we do.",
  },
];

const leadership = [
  {
    name: "Dr. Jennifer Martinez",
    role: "Chief Executive Officer",
    bio: "Former Chief Medical Officer at a Fortune 500 medical device company. 15+ years in clinical affairs and medical education.",
  },
  {
    name: "David Park",
    role: "Chief Commercial Officer",
    bio: "20 years in medical device marketing and market access. Previously led commercial strategy for three successful device launches.",
  },
  {
    name: "Dr. Lisa Thompson",
    role: "Chief Medical Officer",
    bio: "Board-certified cardiologist with 12 years in academic medicine. Leads our clinical content development and accreditation.",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Former healthcare data scientist. Built analytics platforms for two health systems and a pharma company.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="Education that earns adoption"
        subtitle="We help medical device companies bridge the gap between clinical evidence and real-world usage."
      />

      {/* Mission */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold text-navy">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Medical devices can transform patient outcomes—but only if
              clinicians have the confidence to use them. VantagePoint exists to
              accelerate adoption through credible, evidence-based education and
              compliant market programs.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              We're not a marketing agency. We're clinical educators,
              researchers, and data scientists who understand both the science
              and the business of medical devices. Our programs are designed by
              clinicians, for clinicians—and they drive measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Why VantagePoint? */}
      <WhyUs
        condensed={true}
        title="Why VantagePoint?"
        intro="We bridge the gap between clinical evidence and real-world adoption through education, compliant outreach, and data-driven programs."
        bullets={[
          {
            icon: <Target className="h-6 w-6 text-teal" aria-hidden="true" />,
            title: "Strategic Focus",
            text: "Post-code commercialization programs that drive measurable provider adoption.",
          },
          {
            icon: <Users className="h-6 w-6 text-teal" aria-hidden="true" />,
            title: "Clinical Expertise",
            text: "Team of clinicians and strategists who understand healthcare workflows and evidence-based practice.",
          },
          {
            icon: <Shield className="h-6 w-6 text-teal" aria-hidden="true" />,
            title: "Compliance-First",
            text: "Fair-balance language, permission-based outreach, and rigorous review processes.",
          },
        ]}
      />

      {/* Values */}
      <section className="bg-fog py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-navy">
              Our Values
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                    <value.icon
                      className="h-6 w-6 text-teal"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-4 font-semibold text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-navy">
              Leadership Team
            </h2>
            <p className="mt-4 text-lg text-slate">
              Clinical and commercial expertise at the intersection of evidence
              and adoption
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 lg:max-w-none lg:grid-cols-2">
            {leadership.map((leader) => (
              <div key={leader.name} className="flex gap-6">
                <div className="h-24 w-24 flex-shrink-0 rounded-lg bg-slate/10" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-navy">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-teal">
                    {leader.role}
                  </p>
                  <p className="mt-3 text-sm text-slate">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold">
              Compliance & Security
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-fog">
              We maintain the highest standards for data security and regulatory
              compliance. Our operations are HIPAA-compliant, SOC 2 Type II
              certified, and we execute Business Associate Agreements (BAAs)
              with all partners handling protected health information.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-fog">
              All education programs undergo rigorous commercial bias review to
              meet ACCME standards. We maintain detailed audit trails and
              documentation for regulatory inspections.
            </p>
            <div className="mt-10">
              <a
                href="/trust-center"
                className="text-gold hover:underline font-semibold"
              >
                Visit our Trust Center →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold text-navy">
              Our Culture
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              We're a remote-first team of clinical educators, researchers, and
              strategists who are passionate about improving patient outcomes.
              We value intellectual curiosity, collaboration, and a commitment
              to evidence-based practice.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              We invest in our team's growth through continuing education,
              conference attendance, and professional development. Many team
              members maintain clinical credentials and stay active in their
              specialties.
            </p>
            <div className="mt-8">
            <a
              href="/contact"
              className="text-teal hover:underline font-semibold"
            >
              Contact us →
            </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
