"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useState } from "react";
import { useErc20Approve } from "@/hooks/useErc20Approve";
import { useStakeDeposit } from "@/hooks/useStakeDeposit";
import { useBalances } from "@/hooks/useBalances";
import { parseEther } from "viem";

export function StakeInput() {
  const [stakeAmount, setStakeAmount] = useState<string>("");
  const { login, authenticated } = usePrivy();
  const { approve, isApproving } = useErc20Approve();
  const { deposit, isDepositing } = useStakeDeposit();
  const { data: balances } = useBalances();

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!authenticated) {
        login();
        return;
      }

      if (!stakeAmount || parseFloat(stakeAmount) <= 0) {
        console.error("Please enter a valid amount");
        return;
      }

      try {
        const parsedAmount = parseEther(stakeAmount);
        const currentAllowance = balances?.allowance ?? BigInt(0);

        if (parsedAmount > currentAllowance) {
          const approvalHash = await approve(stakeAmount);
          console.log("Approval transaction hash:", approvalHash);
        }

        const depositHash = await deposit(stakeAmount);
        console.log("Deposit transaction hash:", depositHash);
        setStakeAmount("");
      } catch (error) {
        console.error("Error in staking process:", error);
      }
    }
  };

  const isProcessing = isApproving || isDepositing;

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
        disabled={isProcessing}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50"
      />
      {isApproving && (
        <div className="text-sm text-gray-500">Approving tokens...</div>
      )}
      {isDepositing && (
        <div className="text-sm text-gray-500">Depositing tokens...</div>
      )}
    </div>
  );
}
