"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { LaptopFrame, PhoneFrame } from "@/components/marketing/device-frames";
import { DashboardMockup } from "@/components/marketing/dashboard-mockup";
import { MobileMockup } from "@/components/marketing/mobile-mockup";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(242,183,5,0.10),transparent_70%)]"
        aria-hidden="true"
      />

      <Container className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge>Construction Intelligence Platform</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-4xl text-display-xl font-semibold text-balance text-ink-950 dark:text-white"
        >
          Build with confidence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink-600 md:text-xl dark:text-ink-300"
        >
          Whether you&apos;re building your dream home or managing multiple projects, Dexment gives you
          complete visibility into your budget, documents, approvals and progress &mdash; so you always know
          what&apos;s happening.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <LinkButton href="#waitlist" variant="accent" size="lg">
            Join the Early Access Waitlist
          </LinkButton>
          <LinkButton href="#how-it-works" variant="secondary" size="lg">
            See how it works
          </LinkButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-20 w-full max-w-[960px] md:mt-24"
        >
          <div className="mx-auto w-full max-w-[860px]">
            <LaptopFrame>
              <DashboardMockup />
            </LaptopFrame>
          </div>
          <div className="absolute -bottom-10 right-0 hidden w-[170px] sm:block md:-bottom-14 md:right-2 md:w-[200px] lg:right-8">
            <PhoneFrame>
              <MobileMockup />
            </PhoneFrame>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
