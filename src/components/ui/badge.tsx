import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-ink-950/10 bg-ink-950/[0.03] px-3.5 py-1.5 text-[0.8125rem] font-medium tracking-wide text-ink-700 dark:border-white/15 dark:bg-white/[0.04] dark:text-ink-200",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
      {children}
    </span>
  );
}
