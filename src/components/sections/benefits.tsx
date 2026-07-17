import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const benefits = [
  {
    title: "Never wonder where your budget went.",
    body: "Every naira is logged against a project, a phase and a line item — visible the moment it's spent.",
    icon: (
      <path
        d="M16 6v20M22 10.5c0-2-2-3.5-6-3.5s-6 1.7-6 4 2.4 3 6 3.5c3.6.5 6 1.2 6 3.5s-2 4-6 4-6-1.5-6-3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Every document exactly where you expect it.",
    body: "Drawings, receipts and approvals, version-controlled and searchable — never lost in a chat thread again.",
    icon: (
      <path
        d="M9 5h9l5 5v17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z M18 5v5h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Find professionals you can trust.",
    body: "Vetted contractors and vendors with verified track records, so you're never guessing who to hire.",
    icon: (
      <path
        d="M21 27v-2.4a4.6 4.6 0 0 0-4.6-4.6h-4.8A4.6 4.6 0 0 0 7 24.6V27M16 15.8a4.4 4.4 0 1 0 0-8.8 4.4 4.4 0 0 0 0 8.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Know what's happening on site, without being there.",
    body: "Photos, timelines and milestone updates flow in automatically, so nothing depends on a phone call.",
    icon: (
      <>
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16 10v6l4 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Make decisions with today's numbers.",
    body: "Real-time reporting means every approval and every projection is based on where things actually stand.",
    icon: (
      <path
        d="M6 22l6-7 5 4 9-11M26 8h-6v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Sleep well knowing nothing slips through.",
    body: "Approvals, deadlines and budget alerts surface automatically, so small issues never become expensive ones.",
    icon: (
      <path
        d="M16 5c-5 2-9 2-9 2v9c0 6.5 4 10.5 9 12.5 5-2 9-6 9-12.5V7s-4 0-9-2Z M12.5 16l2.5 2.5 5-5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="section-y bg-background">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Why teams choose Dexment"
          title="Everything you need to stay in control."
          description="Not a longer feature list — a shorter list of things you'll never have to worry about again."
        />

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={(i % 3) * 0.08} className="flex flex-col gap-4">
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" className="text-ink-950 dark:text-white" aria-hidden="true">
                {benefit.icon}
              </svg>
              <h3 className="text-[1.05rem] font-semibold leading-snug text-ink-950 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-ink-500 dark:text-ink-400">{benefit.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
