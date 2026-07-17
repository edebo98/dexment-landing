import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const testimonials = [
  {
    quote:
      "For the first time, I knew exactly what was happening on my site without calling my contractor every other day.",
    name: "Amara O.",
    role: "Homeowner, Lagos",
    initials: "AO",
  },
  {
    quote:
      "Our clients stopped asking for updates because they could already see everything themselves. It changed how we work.",
    name: "Tunde B.",
    role: "Contractor, Abuja",
    initials: "TB",
  },
  {
    quote:
      "Running four sites at once used to mean four different spreadsheets. Now it's one dashboard and one version of the truth.",
    name: "Chiamaka N.",
    role: "Property Developer, Port Harcourt",
    initials: "CN",
  },
];

export function Testimonials() {
  return (
    <section className="section-y bg-background">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Early access preview"
          title="Built with the people who live this every day."
          description="We're building Dexment alongside homeowners, contractors and developers shaping our early access program."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className="flex flex-col justify-between gap-8 rounded-2xl border border-ink-950/8 bg-paper-soft p-8 dark:border-white/10 dark:bg-ink-900"
            >
              <p className="text-[1.0625rem] leading-relaxed text-ink-800 text-balance dark:text-ink-100">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-950 text-[0.8rem] font-semibold text-white dark:bg-white dark:text-ink-950">
                  {t.initials}
                </span>
                <div className="flex flex-col">
                  <span className="text-[0.9rem] font-medium text-ink-950 dark:text-white">{t.name}</span>
                  <span className="text-[0.8125rem] text-ink-500 dark:text-ink-400">{t.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
