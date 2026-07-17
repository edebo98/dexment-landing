"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const faqs = [
  {
    question: "Is Dexment only for large construction companies?",
    answer:
      "No. Dexment is built for anyone with a stake in a build — from a homeowner managing a single project to a developer overseeing dozens of sites.",
  },
  {
    question: "Do I need technical experience to use it?",
    answer:
      "Not at all. Dexment is designed to feel as simple as checking your phone — no construction software experience required.",
  },
  {
    question: "Can my contractor and team access the same project?",
    answer:
      "Yes. Invite your contractor, architect, engineer or family members with role-based access, so everyone sees exactly what they need to.",
  },
  {
    question: "Is my financial and project data secure?",
    answer:
      "Yes. Your data is encrypted and belongs to you alone. We never share project or financial information with third parties.",
  },
  {
    question: "Does Dexment work on mobile?",
    answer:
      "Yes. The Dexment mobile companion gives you the same real-time visibility into budget, documents and progress, wherever you are.",
  },
  {
    question: "When can I start using Dexment?",
    answer:
      "We're bringing on early access users in phases. Join the waitlist and we'll reach out with priority access as your spot opens up.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-ink-950/8 dark:border-white/10">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="text-[1.0625rem] font-medium text-ink-950 dark:text-white">{question}</span>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink-950/12 dark:border-white/20">
            <motion.svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            >
              <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </motion.svg>
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={id}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 text-[0.9375rem] leading-relaxed text-ink-500 dark:text-ink-400">
              {answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="section-y bg-background">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="FAQ" title="Questions, answered plainly." align="center" className="mx-auto max-w-2xl" />
        <Reveal delay={0.1} className="mx-auto w-full max-w-3xl">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
