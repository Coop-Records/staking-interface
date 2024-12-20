"use client";

import { useStakingProvider } from "@/providers/StakingProvider";
import Image from "next/image";

export function StakeInput() {
  const {
    stakeAmount,
    setStakeAmount,
    handleStake,
    handleApprove,
    isApproving,
    isDepositing,
  } = useStakingProvider();

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      try {
        await handleApprove();
        await handleStake();
      } catch (error) {
        console.error("Error in staking process:", error);
      }
    }
  };

  const isProcessing = isApproving || isDepositing;

  return (
    <div className="bg-gray-50 rounded-2xl p-2 flex items-center justify-between">
      <input
        type="number"
        min="0"
        step="any"
        placeholder="Enter amount"
        value={stakeAmount}
        onChange={(e) => setStakeAmount(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isProcessing}
        className="border-0 bg-transparent text-lg w-24 p-0 focus-visible:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50"
      />
      <div className="flex items-center gap-2">
        <Image
          src="https://ipfs.decentralized-content.com/ipfs/QmcTqdWEkevrzESmS8um7i88kcM3AY5oLLbKSZL3ToPqjX"
          alt="IJN token"
          width={24}
          height={24}
          className="rounded-full"
        />
        <span className="font-medium">IJN</span>
      </div>
      {isProcessing && (
        <div className="absolute left-0 right-0 -bottom-6 text-center text-sm text-gray-500">
          {isApproving ? "Approving tokens..." : "Depositing tokens..."}
        </div>
      )}
    </div>
  );
}
