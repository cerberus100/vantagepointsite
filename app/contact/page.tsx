import { Suspense } from "react";
import { HeroSection } from "@/components/hero-section";
import { ContactFormWrapper } from "@/components/contact-form-wrapper";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Let's talk about your goals"
        subtitle="Whether you're launching a new device or looking to expand adoption, we're here to help."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy">
                Get in touch
              </h2>
              <p className="mt-4 text-lg text-slate">
                We typically respond within 24 hours. For urgent inquiries,
                please call us directly.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                    <Mail className="h-6 w-6 text-teal" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Email</h3>
                    <a
                      href="mailto:hello@vantagepoint.health"
                      className="text-slate hover:text-teal"
                    >
                      hello@vantagepoint.health
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                    <Phone className="h-6 w-6 text-teal" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Phone</h3>
                    <a
                      href="tel:+18005551234"
                      className="text-slate hover:text-teal"
                    >
                      (800) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                    <MapPin className="h-6 w-6 text-teal" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Office</h3>
                    <p className="text-slate">
                      123 Healthcare Drive
                      <br />
                      Boston, MA 02101
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-lg bg-fog p-6">
                <h3 className="font-semibold text-navy">
                  Business Associate Agreement (BAA)
                </h3>
                <p className="mt-2 text-sm text-slate">
                  Need a BAA for HIPAA compliance? We're happy to execute one.
                  Please mention it in your message below.
                </p>
              </div>
            </div>

            {/* Contact Form */}
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
        </div>
      </section>
    </>
  );
}
