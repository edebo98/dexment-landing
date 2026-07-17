import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, mark = "dark" }: { className?: string; mark?: "dark" | "light" }) {
  const tone = mark === "dark" ? "text-ink-950 dark:text-white" : "text-white";
  return (
    <span className={cn("inline-flex items-center gap-2 select-none", className)}>
      <Image src="/logo-mark.png" alt="" width={28} height={28} className="h-7 w-7 shrink-0" priority />
      <span className={cn("text-[1.05rem] font-semibold tracking-tight", tone)}>Dexment</span>
    </span>
  );
}
