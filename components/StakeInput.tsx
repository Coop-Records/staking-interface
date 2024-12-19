"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useState } from "react";
import { getBalances } from "@/lib/viem/getBalances";
import { Address } from "viem";

export function StakeInput() {
  const [stakeAmount, setStakeAmount] = useState<string>("");
  const { login, authenticated, user } = usePrivy();

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!authenticated) {
        login();
        return;
      }

      try {
        const walletAddress = user?.wallet?.address as Address;
        if (!walletAddress) {
          console.error("No wallet address found");
          return;
        }

        const balances = await getBalances(walletAddress);
        console.log("Balances:", balances);
      } catch (error) {
        console.error("Error fetching balances:", error);
      }
    }
  };

  return (
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
  );
}
