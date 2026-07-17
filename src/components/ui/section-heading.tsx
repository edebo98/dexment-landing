import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  size = "md",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const titleSize = {
    sm: "text-display-sm",
    md: "text-display-md",
    lg: "text-display-lg",
  }[size];

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-accent-700 dark:text-accent-400">
          {eyebrow}
        </span>
      ) : null}
      <h2 className={cn(titleSize, "font-semibold text-balance text-ink-950 dark:text-white")}>{title}</h2>
      {description ? (
        <p
          className={cn(
            "max-w-[46ch] text-lg leading-relaxed text-ink-600 dark:text-ink-300",
            align === "center" && "max-w-[52ch]"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
