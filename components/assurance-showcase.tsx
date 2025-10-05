"use client";

import { useState } from "react";
import Link from "next/link";
import { PreviewCard } from "./preview-card";
import { SegmentedControl } from "./segmented-control";
import { StepTimeline } from "./step-timeline";
import { TagList } from "./tag-list";
import {
  ClipboardList,
  UsersRound,
  Mail,
  Share2,
  Target,
  FileCog,
  GraduationCap,
  Rocket,
  BarChart3,
} from "lucide-react";

interface AssuranceShowcaseProps {
  segment?: "hospital" | "asc" | "clinic";
}

const segments = ["Hospital/IDN", "ASC", "Clinic"];

const stepTimelineData = [
  { label: "Target", icon: <Target className="h-6 w-6 text-teal" aria-hidden="true" /> },
  { label: "Access", icon: <FileCog className="h-6 w-6 text-teal" aria-hidden="true" /> },
  { label: "Educate", icon: <GraduationCap className="h-6 w-6 text-teal" aria-hidden="true" /> },
  { label: "Launch", icon: <Rocket className="h-6 w-6 text-teal" aria-hidden="true" /> },
  { label: "Measure", icon: <BarChart3 className="h-6 w-6 text-teal" aria-hidden="true" /> },
];

const measurementTags = [
  "Meetings booked",
  "Show rate", 
  "Qualified meetings",
  "VAC submissions",
  "EMR order-set requests",
  "Contracting progress",
  "First PO date",
];

const cardData = {
  "Hospital/IDN": [
    {
      icon: <ClipboardList className="h-6 w-6 text-teal" aria-hidden="true" />,
      title: "Account map",
      summary: "Target list by site-of-care and decision unit.",
      preview: [
        "Top 120 accounts",
        "Decision units: clinician, supply chain, value analysis, finance",
        "Regions & notes",
      ],
    },
    {
      icon: <UsersRound className="h-6 w-6 text-teal" aria-hidden="true" />,
      title: "Buyer briefs",
      summary: "One-pagers for clinician, admin, supply chain, finance.",
      preview: [
        "Clinician brief: indications, workflow impact",
        "Admin brief: implementation, economics",
      ],
    },
    {
      icon: <Mail className="h-6 w-6 text-teal" aria-hidden="true" />,
      title: "Outreach sequences",
      summary: "Email + LinkedIn talk tracks and objection handling.",
      preview: [
        "Intro → evidence digest → request a meeting",
        "Common objections with replies",
      ],
    },
    {
      icon: <Share2 className="h-6 w-6 text-teal" aria-hidden="true" />,
      title: "Handoff SOP",
      summary: "Notes template, next-step matrix, intro email copy.",
      preview: [
        "Qualified? schedule AE",
        "Evaluator packet checklist",
      ],
    },
  ],
  "ASC": [
    {
      icon: <ClipboardList className="h-6 w-6 text-teal" aria-hidden="true" />,
      title: "Account map",
      summary: "Target list by site-of-care and decision unit.",
      preview: [
        "Top 120 accounts",
        "Decision units: clinician, supply chain, value analysis, finance",
        "Regions & notes",
      ],
    },
    {
      icon: <UsersRound className="h-6 w-6 text-teal" aria-hidden="true" />,
      title: "Buyer briefs",
      summary: "One-pagers for clinician, admin, supply chain, finance.",
      preview: [
        "Clinician brief: indications, workflow impact",
        "Admin brief: implementation, economics, supply cost + turnover",
      ],
    },
    {
      icon: <Mail className="h-6 w-6 text-teal" aria-hidden="true" />,
      title: "Outreach sequences",
      summary: "Email + LinkedIn talk tracks and objection handling.",
      preview: [
        "Intro → evidence digest → request a meeting",
        "Common objections with replies",
        "Scheduler script",
      ],
    },
    {
      icon: <Share2 className="h-6 w-6 text-teal" aria-hidden="true" />,
      title: "Handoff SOP",
      summary: "Notes template, next-step matrix, intro email copy.",
      preview: [
        "Qualified? schedule AE",
        "Evaluator packet checklist",
      ],
    },
  ],
  "Clinic": [
    {
      icon: <ClipboardList className="h-6 w-6 text-teal" aria-hidden="true" />,
      title: "Account map",
      summary: "Target list by site-of-care and decision unit.",
      preview: [
        "Top 120 accounts",
        "Decision units: clinician, supply chain, value analysis, finance",
        "Regions & notes",
      ],
    },
    {
      icon: <UsersRound className="h-6 w-6 text-teal" aria-hidden="true" />,
      title: "Buyer briefs",
      summary: "One-pagers for clinician, admin, supply chain, finance.",
      preview: [
        "Clinician brief: indications, workflow impact, visit flow & documentation",
        "Admin brief: implementation, economics",
      ],
    },
    {
      icon: <Mail className="h-6 w-6 text-teal" aria-hidden="true" />,
      title: "Outreach sequences",
      summary: "Email + LinkedIn talk tracks and objection handling.",
      preview: [
        "Intro → evidence digest → request a meeting",
        "Common objections with replies",
      ],
    },
    {
      icon: <Share2 className="h-6 w-6 text-teal" aria-hidden="true" />,
      title: "Handoff SOP",
      summary: "Notes template, next-step matrix, intro email copy.",
      preview: [
        "Qualified? schedule AE",
        "Evaluator packet checklist",
        "EMR request template",
      ],
    },
  ],
};

export function AssuranceShowcase({ segment = "hospital" }: AssuranceShowcaseProps) {
  const [selectedSegment, setSelectedSegment] = useState(
    segment === "hospital" ? "Hospital/IDN" : segment === "asc" ? "ASC" : "Clinic"
  );

  const cards = cardData[selectedSegment as keyof typeof cardData];

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-navy">
            What you'll get working with us
          </h2>
          <p className="mt-4 text-lg text-slate">
            Clear deliverables, a simple process, and indicators that show real momentum.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <SegmentedControl
            options={segments}
            value={selectedSegment}
            onValueChange={setSelectedSegment}
          />
        </div>

        {/* Row A: First 30 days */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-navy">First 30 days</h3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <PreviewCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                summary={card.summary}
                preview={card.preview}
              />
            ))}
          </div>
        </div>

        {/* Row B: How we partner */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-navy">How we partner</h3>
          <div className="mt-6">
            <StepTimeline steps={stepTimelineData} />
          </div>
        </div>

        {/* Row C: What we measure */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-navy">What we measure</h3>
          <div className="mt-6">
            <TagList items={measurementTags} />
            <div className="mt-4">
              <Link
                href="/resources/measurement-definitions"
                className="text-sm font-medium text-teal hover:underline"
              >
                See measurement definitions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
