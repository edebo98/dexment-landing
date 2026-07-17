const phases = [
  { name: "Foundation", pct: 100, status: "Complete" },
  { name: "Structural frame", pct: 100, status: "Complete" },
  { name: "Roofing", pct: 72, status: "In progress" },
  { name: "Electrical & plumbing", pct: 34, status: "In progress" },
  { name: "Finishing", pct: 0, status: "Not started" },
];

export function ProgressMockup() {
  return (
    <div className="flex h-full w-full flex-col gap-5 bg-paper-soft p-5 text-ink-950 md:p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-[0.7rem] font-medium uppercase tracking-wide text-ink-400">Site progress</span>
          <span className="text-[0.95rem] font-semibold text-ink-950">Lekki Phase 1 Residence</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[0.75rem] font-medium text-ink-600 shadow-sm ring-1 ring-ink-950/5">
          Week 18 of 32
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink-950/5 md:p-5">
        {phases.map((phase) => (
          <div key={phase.name} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[0.85rem] font-medium text-ink-800">{phase.name}</span>
              <span
                className={`text-[0.72rem] font-medium ${
                  phase.status === "Complete"
                    ? "text-emerald-600"
                    : phase.status === "In progress"
                      ? "text-accent-700"
                      : "text-ink-400"
                }`}
              >
                {phase.status}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-ink-100">
              <div
                className={`h-full rounded-full ${phase.pct === 100 ? "bg-emerald-500" : "bg-accent-400"}`}
                style={{ width: `${phase.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
