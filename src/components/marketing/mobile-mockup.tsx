export function MobileMockup() {
  return (
    <div className="flex h-full w-full flex-col gap-4 bg-paper-soft p-4 text-ink-950">
      <div className="flex items-center justify-between">
        <span className="text-[0.7rem] font-medium uppercase tracking-wide text-ink-400">Today</span>
        <span className="h-2 w-2 rounded-full bg-accent-400" />
      </div>

      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink-950/5">
        <div className="flex items-center justify-between">
          <span className="text-[0.8rem] font-medium text-ink-500">Overall progress</span>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full">
            <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#EEEEEC" strokeWidth="3.5" />
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                stroke="#F2B705"
                strokeWidth="3.5"
                strokeDasharray="97.4"
                strokeDashoffset="37"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-[0.8rem] font-semibold">62%</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[0.85rem] font-medium text-ink-950">Block C &mdash; Roofing</span>
            <span className="text-[0.75rem] text-ink-500">On schedule</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink-950/5">
        <span className="text-[0.8rem] font-medium text-ink-500">Budget</span>
        <div className="mt-1.5 text-lg font-semibold text-ink-950">&#8358;28.3M spent</div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
          <div className="h-full w-[63%] rounded-full bg-accent-400" />
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink-950/5">
        <span className="text-[0.8rem] font-medium text-ink-500">Awaiting approval</span>
        <div className="flex items-center justify-between rounded-xl bg-ink-50 px-3 py-2.5">
          <span className="text-[0.8rem] text-ink-700">Tile selection &mdash; Bathroom</span>
          <span className="text-[0.7rem] font-medium text-accent-700">Review</span>
        </div>
      </div>
    </div>
  );
}
