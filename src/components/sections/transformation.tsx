import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const rows = [
  {
    before: "Budget updates arrive as a phone call, days after the money is spent.",
    after: "Every cost is logged the moment it happens, against the right budget line.",
  },
  {
    before: "Drawings, receipts and approvals live across email, WhatsApp and paper.",
    after: "One workspace holds every document, version and approval in its place.",
  },
  {
    before: "You only find out about a problem once it's already expensive to fix.",
    after: "You see progress and risk in real time, while there's still time to act.",
  },
  {
    before: "Trusting a contractor means hoping for the best.",
    after: "Trusting a contractor means seeing the evidence for yourself.",
  },
];

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 text-ink-300" aria-hidden="true">
      <path d="M4.5 4.5l9 9M13.5 4.5l-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 text-accent-700 dark:text-accent-400" aria-hidden="true">
      <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Transformation() {
  return (
    <section className="section-y bg-background">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="The shift"
          title="From chasing updates to staying in control."
          description="Dexment doesn't add another tool to the pile. It replaces the scattered systems you're already tired of."
        />

        <div className="grid overflow-hidden rounded-2xl border border-ink-950/8 md:grid-cols-2 dark:border-white/10">
          <div className="flex flex-col gap-8 bg-paper-soft p-8 md:p-10 dark:bg-ink-900">
            <span className="text-[0.8125rem] font-semibold uppercase tracking-wide text-ink-500">
              Without Dexment
            </span>
            <ul className="flex flex-col gap-6">
              {rows.map((row) => (
                <li key={row.before} className="flex items-start gap-3">
                  <XIcon />
                  <span className="text-[0.9375rem] leading-relaxed text-ink-500">{row.before}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8 bg-white p-8 md:p-10 dark:bg-ink-950">
            <span className="text-[0.8125rem] font-semibold uppercase tracking-wide text-accent-700 dark:text-accent-400">
              With Dexment
            </span>
            <ul className="flex flex-col gap-6">
              {rows.map((row) => (
                <li key={row.after} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[0.9375rem] leading-relaxed text-ink-800 dark:text-ink-100">
                    {row.after}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
