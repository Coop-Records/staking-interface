"use client";

import { useBalances } from "@/hooks/useBalances";
import { formatEther } from "viem";

export function Balances() {
  const { data: balances, isLoading } = useBalances();

  if (isLoading) {
    return <div>Loading balances...</div>;
  }

  if (!balances) {
    return null;
  }

  const tokenBalance = formatEther(balances.tokenBalance ?? BigInt(0));
  const stakedBalance = formatEther(balances.stakedBalance ?? BigInt(0));
  const allowance = formatEther(balances.allowance ?? BigInt(0));

  const depositTime = balances.depositTimestamp
    ? Number(balances.depositTimestamp) * 1000
    : 0;
  const lockDurationSeconds = balances.lockDuration
    ? Number(balances.lockDuration)
    : 0;
  const unlockTime = depositTime + lockDurationSeconds * 1000;

  const formatUnlockDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
    });
  };

  return (
    <div className="flex flex-col gap-2 text-sm">
      <div>Available: {parseFloat(tokenBalance).toFixed(0)} IJN</div>
      <div>Staked: {parseFloat(stakedBalance).toFixed(0)} IJN</div>
      <div>Approved for staking: {parseFloat(allowance).toFixed(0)} IJN</div>
      {depositTime > 0 && (
        <div>
          <div className="text-xs text-gray-500">
            Unlocks on {formatUnlockDate(unlockTime)}
          </div>
        </div>
      )}
    </div>
  );
}
