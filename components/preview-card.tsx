"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

interface PreviewCardProps {
  icon: ReactNode;
  title: string;
  summary: string;
  preview: string[];
}

export function PreviewCard({ icon, title, summary, preview }: PreviewCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="group h-full cursor-pointer rounded-2xl shadow-sm transition-all duration-200 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2">
          <CardHeader>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
              {icon}
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate">{summary}</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
              }}
            >
              Preview
            </Button>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          {preview.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-teal" />
              <p className="text-sm text-slate">{item}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
