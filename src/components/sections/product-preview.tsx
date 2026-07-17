"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { LaptopFrame } from "@/components/marketing/device-frames";
import { DashboardMockup } from "@/components/marketing/dashboard-mockup";
import { DocumentsMockup } from "@/components/marketing/documents-mockup";
import { ProgressMockup } from "@/components/marketing/progress-mockup";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "budget",
    label: "Budget",
    heading: "Know exactly where every naira goes.",
    body: "Every cost logged against the right line item, so your budget always reflects reality.",
    render: () => <DashboardMockup />,
  },
  {
    id: "documents",
    label: "Documents",
    heading: "Every file exactly where you expect it.",
    body: "Drawings, receipts and approvals, version-controlled and searchable in one place.",
    render: () => <DocumentsMockup />,
  },
  {
    id: "progress",
    label: "Progress",
    heading: "See what's happening on site without being there.",
    body: "Track every phase against schedule, updated as work actually happens.",
    render: () => <ProgressMockup />,
  },
] as const;

export function ProductPreview() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("budget");
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="product" className="section-y bg-paper-soft dark:bg-ink-950/40">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Inside Dexment"
          title="One workspace. Complete visibility."
          description="Everyone on the project — from homeowner to site engineer — sees the same accurate picture, updated in real time."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <Reveal delay={0.1} className="flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-ink-950/8 bg-white p-1 dark:border-white/10 dark:bg-ink-900">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-[0.875rem] font-medium transition-colors",
                  active === tab.id ? "text-white" : "text-ink-500 hover:text-ink-950 dark:hover:text-white"
                )}
              >
                {active === tab.id ? (
                  <motion.span
                    layoutId="product-tab-pill"
                    className="absolute inset-0 rounded-full bg-ink-950 dark:bg-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                ) : null}
                <span className="relative">{tab.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto flex w-full max-w-[880px] flex-col gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8"
            >
              <LaptopFrame>{current.render()}</LaptopFrame>
              <div className="mx-auto flex max-w-xl flex-col items-center gap-2 text-center">
                <h3 className="text-xl font-semibold text-ink-950 dark:text-white">{current.heading}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-ink-500 dark:text-ink-400">{current.body}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
