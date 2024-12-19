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

  return (
    <div className="flex flex-col gap-2 text-sm">
      <div>Available: {parseFloat(tokenBalance).toFixed(0)} IJN</div>
      <div>Staked: {parseFloat(stakedBalance).toFixed(0)} IJN</div>
      <div>Approved for staking: {parseFloat(allowance).toFixed(0)} IJN</div>
    </div>
  );
}
