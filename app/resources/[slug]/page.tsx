import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getContentBySlug, getAllContent } from "@/lib/mdx";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Resource {
  slug: string;
  title: string;
  summary: string;
  content: string;
}

export async function generateStaticParams() {
  const resources = await getAllContent<Resource>("resources");
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const resource = await getContentBySlug<Resource>("resources", params.slug);

  return {
    title: `${resource.title} | VantagePoint`,
    description: resource.summary,
  };
}

export default async function ResourcePage({
  params,
}: {
  params: { slug: string };
}) {
  const resource = await getContentBySlug<Resource>("resources", params.slug);

  return (
    <>
      {/* Header */}
      <section className="border-b border-slate/10 bg-fog py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Button asChild variant="ghost" size="sm" className="mb-6">
            <Link href="/resources">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to Resources
            </Link>
          </Button>
          <h1 className="font-serif text-4xl font-bold text-navy">
            {resource.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-navy prose-h2:mt-12 prose-h2:text-3xl prose-h3:mt-8 prose-h3:text-xl prose-p:text-slate prose-a:text-teal prose-a:no-underline hover:prose-a:underline prose-strong:text-navy prose-ul:text-slate prose-li:marker:text-teal">
            <MDXRemote source={resource.content} />
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="border-t border-slate/10 bg-fog py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy">
            Want to discuss this in detail?
          </h2>
          <p className="mt-4 text-lg text-slate">
            Schedule a call to walk through how this applies to your device and
            market.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Talk to our team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
