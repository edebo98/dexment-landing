import type { ReactNode } from "react";

export function LaptopFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-t-2xl rounded-b-xl border border-ink-950/10 bg-white shadow-elevated dark:border-white/10">
        <div className="flex items-center gap-1.5 border-b border-ink-950/8 bg-paper-mist px-4 py-3 dark:border-white/10">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <div className="mx-auto flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[0.7rem] text-ink-400 ring-1 ring-ink-950/5">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M6 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
            app.dexment.com
          </div>
        </div>
        <div className="aspect-[16/10.5] w-full">{children}</div>
      </div>
      <div className="mx-auto h-3 w-[86%] rounded-b-2xl bg-gradient-to-b from-ink-200 to-ink-300 dark:from-ink-700 dark:to-ink-800" />
    </div>
  );
}

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-full overflow-hidden rounded-[2rem] border-[6px] border-ink-950 bg-white shadow-elevated dark:border-ink-800">
      <div className="relative">
        <div className="absolute left-1/2 top-0 z-10 h-4 w-24 -translate-x-1/2 rounded-b-xl bg-ink-950" />
        <div className="aspect-[9/18.5] w-full">{children}</div>
      </div>
    </div>
  );
}
