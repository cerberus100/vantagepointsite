import { cn } from "@/lib/utils";

interface TagListProps {
  items: string[];
  className?: string;
}

export function TagList({ items, className }: TagListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center rounded-full bg-fog px-3 py-1 text-sm font-medium text-slate"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
