import { CheckCircle2 } from "lucide-react";

interface Phase {
  label: string;
  range: string;
  bullets: string[];
}

interface MilestoneTimelineProps {
  phases: Phase[];
}

export function MilestoneTimeline({ phases }: MilestoneTimelineProps) {
  return (
    <div className="space-y-8 lg:space-y-0 lg:flex lg:gap-8">
      {phases.map((phase, index) => (
        <div
          key={index}
          className="relative flex-1"
        >
          {/* Connector line on desktop */}
          {index < phases.length - 1 && (
            <div
              className="absolute left-6 top-12 hidden h-px w-full bg-slate/20 lg:block"
              aria-hidden="true"
            />
          )}

          {/* Phase marker */}
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal/10 relative z-10">
              <CheckCircle2
                className="h-6 w-6 text-teal"
                aria-hidden="true"
              />
            </div>
            <div>
              <h3 className="font-semibold text-navy">{phase.label}</h3>
              <p className="text-sm text-slate">{phase.range}</p>
            </div>
          </div>

          {/* Bullets */}
          <ul className="ml-6 space-y-2 border-l-2 border-slate/10 pl-6 lg:ml-12 lg:pl-6">
            {phase.bullets.map((bullet, i) => (
              <li key={i} className="text-sm text-slate">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
