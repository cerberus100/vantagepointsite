"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  children?: ReactNode;
  variant?: "default" | "pattern";
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  children,
  variant = "default",
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variant === "pattern" && "bg-gradient-to-br from-navy via-navy to-teal/20",
        className
      )}
    >
      {variant === "pattern" && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1
            className={cn(
              "font-serif text-4xl font-bold tracking-tight sm:text-6xl",
              variant === "pattern" ? "text-white" : "text-navy"
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                "mt-6 text-lg leading-8",
                variant === "pattern" ? "text-fog" : "text-slate"
              )}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
