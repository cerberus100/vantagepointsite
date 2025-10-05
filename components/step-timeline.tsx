"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StepTimelineProps {
  steps: Array<{
    label: string;
    icon: ReactNode;
  }>;
  className?: string;
}

export function StepTimeline({ steps, className }: StepTimelineProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {steps.map((step, index) => (
        <div key={step.label} className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/10">
            {step.icon}
          </div>
          <span className="mt-2 text-sm font-medium text-navy">
            {step.label}
          </span>
          {index < steps.length - 1 && (
            <div className="absolute left-1/2 top-6 h-px w-full -translate-x-1/2 bg-slate/20" />
          )}
        </div>
      ))}
    </div>
  );
}
