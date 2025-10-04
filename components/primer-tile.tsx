import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PrimerTileProps {
  icon: LucideIcon;
  title: string;
  blurb: string;
  href: string;
}

export function PrimerTile({ icon: Icon, title, blurb, href }: PrimerTileProps) {
  return (
    <Link href={href} className="group block h-full">
      <Card className="h-full rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
        <CardHeader>
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10">
            <Icon className="h-5 w-5 text-teal" aria-hidden="true" />
          </div>
          <CardTitle className="text-base">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate">{blurb}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
