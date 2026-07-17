import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-ink-950/8 bg-white shadow-card dark:border-white/10 dark:bg-ink-900",
        className
      )}
      {...props}
    />
  );
}
