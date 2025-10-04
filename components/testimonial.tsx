"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  org: string;
  image?: string;
}

export function Testimonial({ quote, author, role, org }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-lg bg-gradient-to-br from-navy to-teal/20 p-8 text-white shadow-xl"
    >
      <Quote
        className="absolute left-8 top-8 h-12 w-12 text-teal/30"
        aria-hidden="true"
      />
      <div className="relative">
        <blockquote className="mt-8">
          <p className="font-serif text-xl leading-relaxed">{quote}</p>
        </blockquote>
        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-fog">
            {role}, {org}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
