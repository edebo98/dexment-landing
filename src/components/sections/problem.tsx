import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const points = [
  {
    title: "Where did the money go?",
    body: "Receipts in one chat, invoices in another, and a budget spreadsheet nobody has touched in weeks.",
    icon: (
      <path
        d="M6 9h20M6 9v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9M11 9V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3M13 15h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Is the site actually on schedule?",
    body: "You find out something is behind after it's already costing you time and money — not before.",
    icon: (
      <>
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16 10v6l4 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Which drawing is the correct one?",
    body: "Three versions of the same file, sent over email, and nobody is quite sure which one the site is using.",
    icon: (
      <path
        d="M9 5h9l5 5v17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z M18 5v5h5 M12 17h8 M12 21h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export function Problem() {
  return (
    <section className="section-y bg-ink-950 text-white">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="The reality today"
          title="Construction shouldn't feel like guesswork."
          description="Most projects aren't derailed by bad decisions. They're derailed by decisions made without the full picture."
          className="[&_h2]:text-white [&_p]:text-ink-300 [&>span]:text-accent-400"
        />

        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-3">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.08} className="flex flex-col gap-5 bg-ink-950 p-8">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-accent-400" aria-hidden="true">
                {point.icon}
              </svg>
              <h3 className="text-lg font-semibold text-white">{point.title}</h3>
              <p className="text-[0.9375rem] leading-relaxed text-ink-300">{point.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
