"use client";

import Image from "next/image";
import { useStakingProvider } from "@/providers/StakingProvider";
import { formatEther } from "viem";

export function TokenBalance() {
  const { balances } = useStakingProvider();
  const tokenBalance = formatEther(balances?.tokenBalance ?? BigInt(0));

  return (
    <div className="flex items-center gap-2">
      <Image
        src="https://ipfs.decentralized-content.com/ipfs/QmcTqdWEkevrzESmS8um7i88kcM3AY5oLLbKSZL3ToPqjX"
        alt="Wallet icon"
        width={20}
        height={20}
        className="opacity-50"
      />
      <span className="text-gray-600">
        {parseFloat(tokenBalance).toFixed(0)}
      </span>
    </div>
  );
}
