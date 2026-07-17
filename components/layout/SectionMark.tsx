/**
 * Magazine chrome — a volume label + running index, echoing the
 * editorial "VOL.04 … 03 / 08" reference language.
 */

export function SectionMark({
  vol,
  index,
  className = "",
}: {
  vol: string;
  index: string;
  className?: string;
}) {
  return (
    <div className={`flex items-baseline justify-between ${className}`}>
      <span className="t-eyebrow text-ink">{vol}</span>
      <span className="t-eyebrow text-muted-soft">{index}</span>
    </div>
  );
}

export function RunningMark({
  index,
  className = "",
}: {
  index: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-baseline justify-between border-t border-ink-12 pt-6 ${className}`}
    >
      <span className="t-eyebrow text-ink">
        Levante <span className="text-muted-soft">Studio Co.</span>
      </span>
      <span className="t-eyebrow text-muted-soft">{index}</span>
    </div>
  );
}
