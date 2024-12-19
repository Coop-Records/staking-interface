"use client";

import { useBalances } from "@/lib/hooks/useBalances";
import { formatEther } from "viem";

export function Balances() {
  const { data: balances, isLoading } = useBalances();

  if (isLoading) {
    return <div>Loading balances...</div>;
  }

  if (!balances) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2 text-sm">
      <div>
        Available:{" "}
        {parseFloat(formatEther(balances.tokenBalance?.toString())).toFixed(
          0
        ) ?? "0"}{" "}
        IJN
      </div>
      <div>
        Staked: {formatEther(balances.stakedBalance?.toString()) ?? "0"} IJN
      </div>
    </div>
  );
}
