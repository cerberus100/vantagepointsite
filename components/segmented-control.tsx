"use client";

import { cn } from "@/lib/utils";

interface SegmentedControlProps {
  options: string[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export function SegmentedControl({
  options,
  value,
  onValueChange,
  className,
}: SegmentedControlProps) {
  return (
    <div
      className={cn(
        "inline-flex rounded-lg bg-fog p-1",
        className
      )}
      role="tablist"
    >
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onValueChange(option)}
          className={cn(
            "rounded-md px-3 py-2 text-sm font-medium transition-all duration-200",
            "focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
            value === option
              ? "bg-white text-navy shadow-sm"
              : "text-slate hover:text-navy"
          )}
          role="tab"
          aria-selected={value === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
