"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/contact-form";

export function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const program = searchParams.get("program");

  return (
    <>
      {program && (
        <div className="mb-6 rounded-lg bg-teal/10 px-4 py-2 text-sm text-navy">
          Program of interest: <span className="font-semibold">{program}</span>
        </div>
      )}
      <ContactForm program={program || undefined} />
    </>
  );
}
