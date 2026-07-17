const activity = [
  { label: "Foundation inspection approved", time: "2h ago", tone: "positive" as const },
  { label: "Invoice #114 — Zenith Building Materials", time: "5h ago", tone: "neutral" as const },
  { label: "Site photos updated — Block C", time: "1d ago", tone: "neutral" as const },
];

const bars = [38, 52, 46, 68, 60, 74, 82, 65];

export function DashboardMockup() {
  return (
    <div className="flex h-full w-full flex-col gap-5 bg-paper-soft p-5 text-ink-950 md:p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-[0.7rem] font-medium uppercase tracking-wide text-ink-400">Project overview</span>
          <span className="text-[0.95rem] font-semibold text-ink-950">Lekki Phase 1 Residence</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[0.75rem] font-medium text-ink-600 shadow-sm ring-1 ring-ink-950/5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          On track
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink-950/5">
          <div className="flex items-baseline justify-between">
            <span className="text-[0.75rem] font-medium text-ink-500">Budget spent</span>
            <span className="text-[0.75rem] font-medium text-ink-400">of &#8358;45,000,000</span>
          </div>
          <div className="mt-2 text-2xl font-semibold tracking-tight text-ink-950">&#8358;28,350,000</div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-ink-100">
            <div className="h-full w-[63%] rounded-full bg-accent-400" />
          </div>
          <div className="mt-1.5 text-[0.75rem] text-ink-500">63% of budget used &middot; 62% work complete</div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink-950/5">
          <span className="text-[0.75rem] font-medium text-ink-500">Approvals</span>
          <div>
            <div className="text-2xl font-semibold tracking-tight text-ink-950">3</div>
            <div className="text-[0.75rem] text-ink-500">awaiting your review</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink-950/5">
        {bars.map((h, i) => (
          <div key={i} className="flex h-16 items-end">
            <div
              className="w-full rounded-md bg-ink-100"
              style={{ height: `${h}%` }}
            >
              <div
                className="h-full w-full rounded-md bg-gradient-to-t from-ink-950 to-ink-700"
                style={{ opacity: i === bars.length - 2 ? 1 : 0.12 + i * 0.02 }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-1 flex-col gap-2 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink-950/5">
        <span className="text-[0.75rem] font-medium text-ink-500">Recent activity</span>
        <ul className="flex flex-col gap-2.5">
          {activity.map((item) => (
            <li key={item.label} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    item.tone === "positive" ? "bg-emerald-500" : "bg-ink-300"
                  }`}
                />
                <span className="text-[0.8125rem] text-ink-700">{item.label}</span>
              </div>
              <span className="shrink-0 text-[0.75rem] text-ink-400">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
