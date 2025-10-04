import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Bullet {
  icon: ReactNode;
  title: string;
  text: string;
}

interface WhyUsProps {
  title: string;
  intro: string;
  bullets: Bullet[];
  condensed?: boolean;
}

export function WhyUs({ title, intro, bullets, condensed = false }: WhyUsProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg text-slate">{intro}</p>
        </div>
        <div className={`mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 ${
          condensed
            ? "lg:max-w-none lg:grid-cols-2"
            : "lg:max-w-none lg:grid-cols-3"
        }`}>
          {bullets.map((bullet, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
                  {bullet.icon}
                </div>
                <h3 className="mt-4 font-semibold text-navy">
                  {bullet.title}
                </h3>
                <p className="mt-2 text-sm text-slate">{bullet.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
