"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  qualifier?: string;
  footnote?: string;
  delay?: number;
}

export function StatCard({
  title,
  value,
  qualifier,
  footnote,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full border-teal/20 bg-white shadow-md transition-shadow hover:shadow-lg">
        <CardContent className="p-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate">{title}</p>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-4xl font-bold text-navy">
                {value}
              </span>
              {qualifier && (
                <span className="text-lg font-semibold text-teal">
                  {qualifier}
                </span>
              )}
            </div>
            {footnote && (
              <p className="text-xs text-slate/70">{footnote}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
