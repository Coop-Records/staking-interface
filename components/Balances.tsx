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

  const tokenBalance = formatEther(balances.tokenBalance ?? BigInt(0));

  return (
    <div className="flex flex-col gap-2 text-sm">
      <div>Available: {parseFloat(tokenBalance).toFixed(0)} IJN</div>
      <div>Staked: {formatEther(balances.stakedBalance ?? BigInt(0))} IJN</div>
    </div>
  );
}
