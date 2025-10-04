import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    
    return (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input
            type="checkbox"
            id={checkboxId}
            ref={ref}
            className={cn(
              "peer h-5 w-5 shrink-0 rounded border border-slate appearance-none checked:bg-navy checked:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            {...props}
          />
          <Check
            className="pointer-events-none absolute left-0.5 top-0.5 h-4 w-4 text-white opacity-0 peer-checked:opacity-100"
            strokeWidth={3}
          />
        </div>
        {label && (
          <label
            htmlFor={checkboxId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
