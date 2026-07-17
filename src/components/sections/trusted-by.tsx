import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const marks = [
  "Sterling & Cole",
  "Atlas Developments",
  "Northbridge Group",
  "Harcourt Estates",
  "Meridian Build",
  "Solace Homes",
];

export function TrustedBy() {
  return (
    <section className="border-y border-ink-950/6 bg-paper-soft py-12 dark:border-white/8 dark:bg-ink-950/40">
      <Container>
        <Reveal className="flex flex-col items-center gap-8">
          <p className="text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-ink-500">
            Built for the teams shaping the next generation of projects
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 opacity-70 grayscale">
            {marks.map((mark) => (
              <span
                key={mark}
                className="text-[1.05rem] font-semibold tracking-tight text-ink-500 dark:text-ink-400"
              >
                {mark}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
