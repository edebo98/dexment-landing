import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const segments = [
  {
    tag: "Homeowners",
    title: "Building your dream home shouldn't feel like a leap of faith.",
    body: "See every cost, every update and every decision as it happens — without needing to be a construction expert.",
  },
  {
    tag: "Contractors",
    title: "Win trust with transparency, not paperwork.",
    body: "Give clients real-time visibility into progress and spend, so approvals move faster and disputes disappear.",
  },
  {
    tag: "Developers",
    title: "Manage multiple sites without multiplying your stress.",
    body: "One dashboard across every project, every budget and every milestone — no more piecing it together from reports.",
  },
  {
    tag: "Project teams",
    title: "Everyone working from the same accurate picture.",
    body: "Architects, engineers and quantity surveyors, aligned on one source of truth instead of five spreadsheets.",
  },
];

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="section-y bg-paper-soft dark:bg-ink-950/40">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Who it's for"
          title="Built for everyone with a stake in the project."
          description="Different roles, different concerns — one platform that gives each of them exactly the visibility they need."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {segments.map((segment, i) => (
            <Reveal
              key={segment.tag}
              delay={(i % 2) * 0.08}
              className="flex flex-col gap-4 rounded-2xl border border-ink-950/8 bg-white p-8 dark:border-white/10 dark:bg-ink-900"
            >
              <span className="text-[0.8125rem] font-semibold uppercase tracking-wide text-accent-700 dark:text-accent-400">
                {segment.tag}
              </span>
              <h3 className="text-xl font-semibold leading-snug text-ink-950 dark:text-white">{segment.title}</h3>
              <p className="text-[0.9375rem] leading-relaxed text-ink-500 dark:text-ink-400">{segment.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
