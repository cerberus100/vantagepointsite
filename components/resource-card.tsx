import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ResourceCardProps {
  icon: ReactNode;
  title: string;
  summary: string;
  href: string;
}

export function ResourceCard({ icon, title, summary, href }: ResourceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <Card className="h-full rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
        <CardHeader>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate">{summary}</p>
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-teal group-hover:gap-3 transition-all">
            Read more
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}