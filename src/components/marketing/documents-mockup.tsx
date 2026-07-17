const files = [
  { name: "Structural Drawings — Rev C", meta: "Approved · 2 days ago", status: "approved" as const },
  { name: "Site Photos — Block C Roofing", meta: "42 files · 6h ago", status: "neutral" as const },
  { name: "Invoice #114 — Zenith Materials", meta: "Pending review", status: "pending" as const },
  { name: "Building Permit — City Council", meta: "Approved · Jan 12", status: "approved" as const },
  { name: "Electrical Layout — Rev B", meta: "Superseded by Rev C", status: "muted" as const },
];

const statusStyle = {
  approved: "bg-emerald-50 text-emerald-700",
  pending: "bg-accent-50 text-accent-700",
  neutral: "bg-ink-50 text-ink-500",
  muted: "bg-ink-50 text-ink-400",
};

export function DocumentsMockup() {
  return (
    <div className="flex h-full w-full flex-col gap-4 bg-paper-soft p-5 text-ink-950 md:p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-[0.7rem] font-medium uppercase tracking-wide text-ink-400">Documents</span>
          <span className="text-[0.95rem] font-semibold text-ink-950">Lekki Phase 1 Residence</span>
        </div>
        <div className="rounded-full bg-white px-3 py-1.5 text-[0.75rem] font-medium text-ink-500 shadow-sm ring-1 ring-ink-950/5">
          128 files
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-ink-950/5">
        {files.map((file) => (
          <div
            key={file.name}
            className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-ink-50/60"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 text-ink-300" aria-hidden="true">
                <path
                  d="M5 2.5h5.5L14 6v9.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col overflow-hidden">
                <span className="truncate text-[0.85rem] font-medium text-ink-800">{file.name}</span>
                <span className="text-[0.72rem] text-ink-400">{file.meta}</span>
              </div>
            </div>
            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-[0.68rem] font-medium ${statusStyle[file.status]}`}
            >
              {file.status === "approved" ? "Approved" : file.status === "pending" ? "Pending" : "—"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
