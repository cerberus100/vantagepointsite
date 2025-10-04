import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getContentBySlug, getAllContent, type Program } from "@/lib/mdx";

export async function generateStaticParams() {
  const programs = await getAllContent<Program>("programs");
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const program = await getContentBySlug<Program>("programs", params.slug);
  return {
    title: program.title,
    description: program.subtitle,
  };
}

export default async function ProgramPage({
  params,
}: {
  params: { slug: string };
}) {
  const program = await getContentBySlug<Program>("programs", params.slug);

  return (
    <>
      <article className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              {program.title}
            </h1>
            <p className="mt-4 text-lg text-slate">{program.subtitle}</p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="prose prose-lg prose-slate max-w-none">
              <MDXRemote source={program.content} />
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <div className="sticky bottom-0 border-t bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex justify-end">
            <Link
              href={`/contact?program=${params.slug}`}
              className="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium hover:shadow-sm"
              aria-label="Inquire about this program"
            >
              Inquire about this program
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
