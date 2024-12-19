"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useState } from "react";
import { useBalances } from "@/lib/hooks/useBalances";
import { formatEther } from "viem";

export function StakeInput() {
  const [stakeAmount, setStakeAmount] = useState<string>("");
  const { login, authenticated } = usePrivy();
  const { data: balances, isLoading } = useBalances();

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !authenticated) {
      login();
    }
  };

  if (isLoading) {
    return <div>Loading balances...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {balances && (
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
      )}
      <div className="flex flex-col gap-2">
        <label htmlFor="stakeAmount" className="text-sm font-medium">
          Amount to Stake
        </label>
        <input
          id="stakeAmount"
          type="number"
          min="0"
          step="any"
          placeholder="Enter amount of IJN"
          value={stakeAmount}
          onChange={(e) => setStakeAmount(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
    </div>
  );
}
