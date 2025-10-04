import { ReactNode } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Download, Info } from "lucide-react";

interface AssuranceItem {
  icon: ReactNode;
  title: string;
  summary: string;
  downloadHref?: string;
  popover?: {
    heading: string;
    bullets: string[];
  };
}

interface AssuranceStackProps {
  items: AssuranceItem[];
}

export function AssuranceStack({ items }: AssuranceStackProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
              {item.icon}
            </div>
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-lg">{item.title}</CardTitle>
              {item.popover && (
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      className="flex-shrink-0 rounded-full p-1 text-slate hover:bg-fog hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      aria-label={`More information about ${item.title}`}
                    >
                      <Info className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-navy">
                        {item.popover.heading}
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {item.popover.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-teal">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-slate">{item.summary}</p>
            {item.downloadHref && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="mt-4 w-full"
              >
                <Link href={item.downloadHref}>
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                  Download
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
