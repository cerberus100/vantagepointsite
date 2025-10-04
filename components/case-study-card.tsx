import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  client: string;
  specialty: string;
  tags: string[];
  outcomes: Array<{
    metric: string;
    value: string;
  }>;
}

export function CaseStudyCard({
  slug,
  title,
  client,
  specialty,
  tags,
  outcomes,
}: CaseStudyCardProps) {
  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="mb-2 flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal"
            >
              {tag}
            </span>
          ))}
        </div>
        <CardTitle className="line-clamp-2 font-serif text-xl">
          {title}
        </CardTitle>
        <p className="text-sm text-slate">
          {client} • {specialty}
        </p>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-3">
          {outcomes.slice(0, 2).map((outcome, index) => (
            <div key={index} className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-bold text-navy">
                {outcome.value}
              </span>
              <span className="text-sm text-slate">{outcome.metric}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full group">
          <Link href={`/case-studies/${slug}`}>
            Read Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
