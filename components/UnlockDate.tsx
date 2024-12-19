"use client";

import { formatUnlockDate } from "@/lib/utils/formatDate";

interface UnlockDateProps {
  depositTimestamp: bigint | undefined;
  lockDuration: bigint | undefined;
}

export function UnlockDate({
  depositTimestamp,
  lockDuration,
}: UnlockDateProps) {
  if (!depositTimestamp) return null;

  const depositTime = Number(depositTimestamp) * 1000;
  const lockDurationSeconds = lockDuration ? Number(lockDuration) : 0;
  const unlockTime = depositTime + lockDurationSeconds * 1000;

  if (depositTime === 0) return null;

  return (
    <div className="text-xs text-gray-500">
      Unlocks on {formatUnlockDate(unlockTime)}
    </div>
  );
}
