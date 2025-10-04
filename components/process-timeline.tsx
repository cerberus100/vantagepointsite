"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TimelineStep {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative flex gap-x-4"
        >
          {index !== steps.length - 1 && (
            <div
              className="absolute left-0 top-0 flex w-6 justify-center -bottom-8"
              aria-hidden="true"
            >
              <div className="w-px bg-slate/20" />
            </div>
          )}
          <div className="relative flex h-12 w-12 flex-none items-center justify-center rounded-full bg-teal/10">
            {step.icon}
            <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
              {index + 1}
            </div>
          </div>
          <div className="flex-auto pb-8">
            <h3 className="text-lg font-semibold leading-6 text-navy">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate">
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
