/** Flip to true when real campaign numbers exist. Do not ship placeholders. */
export const PROOF_METRICS_LIVE = false;

export const proofMetrics = [
  { label: "Billable call rate", value: "[X]%" },
  { label: "Average call duration", value: "[X] minutes" },
  { label: "Return / dispute rate", value: "[X]%" },
  { label: "Dispute credit turnaround", value: "[X] hours" },
  { label: "Signed IO to live traffic", value: "[X] days" },
  { label: "Monthly call volume", value: "[X]" },
  { label: "Call-tracking platform", value: "[Ringba / Retreaver / TrackDrive]" },
] as const;

export const proofFootnote =
  "Every call passes IVR pre-qualification, geo verification and duplicate suppression, with a [X]-second billable buffer. Disputed calls are credited within [X] hours.";
