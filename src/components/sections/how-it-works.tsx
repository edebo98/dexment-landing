import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    number: "01",
    title: "Set up your project",
    body: "Add your budget, timeline and team in minutes — no lengthy onboarding required.",
  },
  {
    number: "02",
    title: "Connect your site",
    body: "Contractors and vendors log updates, receipts and photos directly, as the work happens.",
  },
  {
    number: "03",
    title: "Stay informed, automatically",
    body: "Budget, progress and documents update in real time — visible from anywhere, on any device.",
  },
  {
    number: "04",
    title: "Decide with confidence",
    body: "Approve, adjust and plan ahead using information you can actually trust.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-y bg-background">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="How it works"
          title="From setup to certainty, in four steps."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08} className="relative flex flex-col gap-4">
              <span className="text-[0.8125rem] font-mono font-medium text-accent-700 dark:text-accent-400">{step.number}</span>
              <h3 className="text-lg font-semibold text-ink-950 dark:text-white">{step.title}</h3>
              <p className="text-[0.9375rem] leading-relaxed text-ink-500 dark:text-ink-400">{step.body}</p>
              {i < steps.length - 1 ? (
                <span className="absolute right-[-1rem] top-2 hidden h-px w-8 bg-ink-950/10 lg:block dark:bg-white/15" />
              ) : null}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
