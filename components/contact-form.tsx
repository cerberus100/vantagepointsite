"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().min(2, "Organization is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  program: z.string().optional(),
  noPhi: z.boolean().refine((val) => val === true, {
    message: "You must confirm no PHI is included",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  program?: string;
}

export function ContactForm({ program }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      program: program || "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // In production, replace with actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          type="text"
          {...register("name")}
          className="mt-1"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Work Email *</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Hidden program field */}
      <input type="hidden" {...register("program")} />

      <div>
        <Label htmlFor="organization">Organization *</Label>
        <Input
          id="organization"
          type="text"
          {...register("organization")}
          className="mt-1"
          aria-invalid={errors.organization ? "true" : "false"}
          aria-describedby={errors.organization ? "organization-error" : undefined}
        />
        {errors.organization && (
          <p id="organization-error" className="mt-1 text-sm text-red-600">
            {errors.organization.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          {...register("message")}
          className="mt-1"
          rows={5}
          placeholder="Tell us about your needs..."
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <div>
        <Checkbox
          id="noPhi"
          {...register("noPhi")}
          label="I confirm this message contains no Protected Health Information (PHI)"
        />
        {errors.noPhi && (
          <p className="mt-1 text-sm text-red-600">{errors.noPhi.message}</p>
        )}
      </div>

      {submitStatus === "success" && (
        <div className="flex items-center gap-2 rounded-md bg-green-50 p-4 text-green-800">
          <CheckCircle2 className="h-5 w-5" />
          <p className="text-sm font-medium">
            Thank you! We'll be in touch within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-center gap-2 rounded-md bg-red-50 p-4 text-red-800">
          <AlertCircle className="h-5 w-5" />
          <p className="text-sm font-medium">
            Something went wrong. Please try again or email us directly.
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        variant="gold"
        size="lg"
        className="w-full"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-slate">
        By submitting this form, you agree to our privacy policy. We will never
        share your information with third parties.
      </p>
    </form>
  );
}
