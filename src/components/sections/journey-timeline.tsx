import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const stages = [
  {
    phase: "Planning & Design",
    body: "Set your budget, timeline and scope before the first brick is laid, so every later decision has a benchmark to hold against.",
  },
  {
    phase: "Permits & Approvals",
    body: "Keep every permit, drawing and regulatory approval organized and accessible, instead of buried in email threads.",
  },
  {
    phase: "Groundwork & Foundation",
    body: "Track early-stage costs and progress from day one, when small overruns are still easy to correct.",
  },
  {
    phase: "Structural Build",
    body: "Monitor spend and schedule as the structure takes shape, with photo evidence tied to every milestone.",
  },
  {
    phase: "Finishing & Fit-Out",
    body: "Review and approve materials, fittings and finishes remotely, without needing to be on site.",
  },
  {
    phase: "Handover",
    body: "Close out with a complete, verifiable record of the entire build — every cost, every approval, every change.",
  },
];

export function JourneyTimeline() {
  return (
    <section className="section-y bg-paper-soft dark:bg-ink-950/40">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="The construction journey"
          title="Support at every stage of the build."
          description="From the first drawing to the final handover, Dexment gives you the same clarity throughout."
        />

        <div className="relative flex flex-col gap-10 md:gap-0">
          <div
            className="absolute left-[7px] top-2 hidden h-[calc(100%-2rem)] w-px bg-ink-950/10 md:block dark:bg-white/15"
            aria-hidden="true"
          />
          {stages.map((stage, i) => (
            <Reveal
              key={stage.phase}
              delay={i * 0.06}
              className="relative flex flex-col gap-2 pl-0 md:flex-row md:gap-10 md:py-8 md:pl-0"
            >
              <div className="flex items-center gap-4 md:w-64 md:shrink-0">
                <span className="relative z-10 flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-accent-400 ring-4 ring-paper-soft dark:ring-ink-950" />
                <span className="text-[0.7rem] font-medium uppercase tracking-wide text-ink-500">
                  Stage {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col gap-2 pl-[29px] md:pl-0">
                <h3 className="text-lg font-semibold text-ink-950 dark:text-white">{stage.phase}</h3>
                <p className="max-w-xl text-[0.9375rem] leading-relaxed text-ink-500 dark:text-ink-400">
                  {stage.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
