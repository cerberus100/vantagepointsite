"use client";

import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { CaseStudyCard } from "@/components/case-study-card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// In production, this would come from getAllContent<CaseStudy>
const caseStudies = [
  {
    slug: "cardiac-device-adoption",
    title: "Accelerating Cardiac Device Adoption Across Four Health Systems",
    client: "Leading Cardiovascular Device Manufacturer",
    specialty: "Cardiology",
    tags: ["CME", "Field Enablement", "Multi-Site"],
    outcomes: [
      { metric: "HCP adoption increase", value: "+37%" },
      { metric: "Program completion", value: "120 days" },
    ],
  },
  {
    slug: "orthopedic-spine-launch",
    title: "Spine Device Launch Education Program",
    client: "Orthopedic Innovations Inc.",
    specialty: "Orthopedic Surgery",
    tags: ["Product Launch", "CME", "Surgical Training"],
    outcomes: [
      { metric: "Surgeon adoption", value: "+52%" },
      { metric: "Completion rate", value: "91%" },
    ],
  },
  {
    slug: "diabetes-tech-education",
    title: "Continuous Glucose Monitor Education Initiative",
    client: "Diabetes Technology Company",
    specialty: "Endocrinology",
    tags: ["Patient Education", "Multi-Channel", "Primary Care"],
    outcomes: [
      { metric: "Prescriptions", value: "+68%" },
      { metric: "Patient satisfaction", value: "4.7★" },
    ],
  },
];

const specialties = ["All", "Cardiology", "Orthopedic Surgery", "Endocrinology"];
const programTypes = ["All", "CME", "Product Launch", "Field Enablement"];

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedProgram, setSelectedProgram] = useState("All");

  const filteredStudies = caseStudies.filter((study) => {
    const matchesSearch =
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "All" || study.specialty === selectedSpecialty;
    const matchesProgram =
      selectedProgram === "All" || study.tags.includes(selectedProgram);

    return matchesSearch && matchesSpecialty && matchesProgram;
  });

  return (
    <>
      <HeroSection
        title="Proven Results"
        subtitle="Real outcomes from our education and market programs across medical device companies and health systems."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-12 space-y-6">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate"
                aria-hidden="true"
              />
              <Input
                type="search"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                aria-label="Search case studies"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate">
                  Specialty
                </label>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((specialty) => (
                    <button
                      key={specialty}
                      onClick={() => setSelectedSpecialty(specialty)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        selectedSpecialty === specialty
                          ? "bg-teal text-white"
                          : "bg-fog text-slate hover:bg-slate/10"
                      }`}
                    >
                      {specialty}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate">
                  Program Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {programTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedProgram(type)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        selectedProgram === type
                          ? "bg-teal text-white"
                          : "bg-fog text-slate hover:bg-slate/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          {filteredStudies.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredStudies.map((study) => (
                <CaseStudyCard key={study.slug} {...study} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-slate">
                No case studies match your filters. Try adjusting your search.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
