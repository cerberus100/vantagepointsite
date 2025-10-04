import { Suspense } from "react";
import { HeroSection } from "@/components/hero-section";
import { ContactFormWrapper } from "@/components/contact-form-wrapper";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Let's talk about your goals"
        subtitle="Whether you're launching a new device or looking to expand adoption, we're here to help."
      />

      <section className="py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="rounded-lg border border-slate/10 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-navy">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-slate">
              Fields marked with * are required
            </p>
            <div className="mt-8">
              <Suspense fallback={<div>Loading...</div>}>
                <ContactFormWrapper />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
