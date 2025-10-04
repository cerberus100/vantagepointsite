import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { ProcessTimeline } from "@/components/process-timeline";
import { StatCard } from "@/components/stat-card";
import { Testimonial } from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Users,
  Target,
  BarChart3,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const processSteps = [
  {
    title: "Discovery & Needs Assessment",
    description:
      "We analyze your device, target audience, clinical evidence, and competitive landscape to identify knowledge gaps and learning objectives.",
    icon: <Lightbulb className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Program Design",
    description:
      "Our clinical team designs accredited CME/CE content with evidence-based learning modules, case studies, and interactive assessments.",
    icon: <Target className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Accreditation & Compliance",
    description:
      "We handle all accreditation requirements (ACCME, ANCC, etc.) and ensure full compliance with industry standards and regulations.",
    icon: <FileCheck className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Delivery & Engagement",
    description:
      "Multi-channel delivery through live events, webinars, on-demand modules, and mobile platforms with built-in engagement tracking.",
    icon: <Users className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Measurement & Optimization",
    description:
      "Real-time dashboards track completion rates, knowledge gains, confidence shifts, and behavioral intent. We iterate based on data.",
    icon: <BarChart3 className="h-6 w-6" aria-hidden="true" />,
  },
];

const faqs = [
  {
    question: "What types of accreditation do you provide?",
    answer:
      "We provide ACCME (physicians), ANCC (nurses), ACPE (pharmacists), and other specialty-specific accreditations. Our team handles all documentation and compliance requirements.",
  },
  {
    question: "How long does it take to develop a CME program?",
    answer:
      "Typical timeline is 8-12 weeks from kickoff to launch, depending on complexity and accreditation requirements. Rush programs can be accommodated.",
  },
  {
    question: "Can you help with KOL identification and development?",
    answer:
      "Yes. We have a network of clinical advisors and can help identify, recruit, and develop Key Opinion Leaders for your program faculty.",
  },
  {
    question: "How do you measure program effectiveness?",
    answer:
      "We track completion rates, pre/post assessments, confidence shifts, behavioral intent, and downstream adoption metrics. All data is available in real-time dashboards.",
  },
  {
    question: "Do you handle commercial bias review?",
    answer:
      "Absolutely. All content undergoes rigorous commercial bias review to ensure compliance with ACCME standards and maintain educational integrity.",
  },
  {
    question: "Can programs be customized for different specialties?",
    answer:
      "Yes. We create specialty-specific tracks and can tailor content for different learner levels (residents, fellows, attending physicians, APPs).",
  },
];

export default function EducationProgramsPage() {
  return (
    <>
      <HeroSection
        title="Education Programs That Drive Adoption"
        subtitle="Accredited CME/CE programs that translate clinical evidence into confident clinical practice."
        variant="pattern"
      >
        <Button asChild size="lg" variant="gold">
          <Link href="/contact">Discuss Your Program</Link>
        </Button>
      </HeroSection>

      {/* Problem Framing */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold text-navy">
              The Challenge
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Medical device adoption depends on clinician confidence. But
              traditional marketing can't teach complex procedures or address
              clinical concerns. You need education that's credible,
              evidence-based, and measurable—without commercial bias.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              VantagePoint designs accredited education programs that give
              clinicians the knowledge and confidence to adopt new technologies.
              Our programs are built by clinicians, for clinicians—and they
              drive real-world usage.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-fog py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-navy">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-slate">
              From needs assessment to measurement, we handle every aspect of
              program development and delivery.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-navy">
              Program Outcomes
            </h2>
            <p className="mt-4 text-lg text-slate">
              Real results from our education programs
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            <StatCard
              title="Average Completion Rate"
              value="89%"
              footnote="vs. 62% industry average"
            />
            <StatCard
              title="Learner Satisfaction"
              value="4.8"
              qualifier="★"
              footnote="n=2,400 learners"
            />
            <StatCard
              title="Knowledge Gain"
              value="+97%"
              footnote="Pre/post assessment"
            />
            <StatCard
              title="Confidence Increase"
              value="+84%"
              footnote="Reported by learners"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-fog py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-navy">
              What's Included
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {[
              "Full accreditation management (ACCME, ANCC, ACPE)",
              "Clinical content development by MDs/PhDs",
              "Commercial bias review and compliance",
              "Multi-channel delivery (live, virtual, on-demand)",
              "Interactive case studies and assessments",
              "Real-time analytics and reporting",
              "KOL identification and faculty development",
              "Learner engagement and retention strategies",
              "Post-program behavioral tracking",
            ].map((feature, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2
                  className="h-6 w-6 flex-shrink-0 text-teal"
                  aria-hidden="true"
                />
                <span className="text-slate">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Testimonial
            quote="The education program VantagePoint created for our spine device launch was exceptional. Completion rates were 40% higher than our previous programs, and we saw immediate uptake in the field."
            author="Dr. Michael Torres"
            role="Chief Medical Officer"
            org="Orthopedic Innovations Inc."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-fog py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-navy">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-navy">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl text-center px-6">
          <h2 className="font-serif text-3xl font-bold text-navy">
            Ready to build your program?
          </h2>
          <p className="mt-4 text-lg text-slate">
            Let's discuss your education needs and design a program that drives
            adoption.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
