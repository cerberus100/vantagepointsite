import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getContentBySlug, getAllContent, type CaseStudy } from "@/lib/mdx";
import { Button } from "@/components/ui/button";
import { Testimonial } from "@/components/testimonial";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const caseStudies = await getAllContent<CaseStudy>("case-studies");
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  let caseStudy: CaseStudy & { content: string };

  try {
    caseStudy = await getContentBySlug<CaseStudy>("case-studies", params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-teal/20 py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-fog hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-teal/20 px-3 py-1 text-xs font-medium text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">
              {caseStudy.title}
            </h1>
            <p className="mt-4 text-lg text-fog">
              {caseStudy.client} • {caseStudy.specialty}
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes Strip */}
      <section className="border-b border-slate/10 bg-white py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudy.outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-serif text-3xl font-bold text-navy">
                    {outcome.value}
                  </span>
                  {outcome.qualifier && (
                    <span className="text-lg font-semibold text-teal">
                      {outcome.qualifier}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate">{outcome.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            <MDXRemote source={caseStudy.content} />
          </div>

        </div>
      </article>

      {/* Testimonial */}
      {caseStudy.quote && (
        <section className="bg-fog py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <Testimonial
              quote={caseStudy.quote.text}
              author={caseStudy.quote.author}
              role={caseStudy.quote.role}
              org={caseStudy.quote.org}
            />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy">
            Ready for similar results?
          </h2>
          <p className="mt-4 text-lg text-slate">
            Let's discuss how we can accelerate adoption for your device.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
