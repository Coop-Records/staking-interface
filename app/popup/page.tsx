"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { StakeInput } from "@/components/StakeInput";
import { StakeButton } from "@/components/StakeButton";
import { TokenBalance } from "@/components/TokenBalance";

export default function StakingModal() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <Card className="w-full max-w-md p-6 space-y-6 rounded-3xl">
        {/* Title Row */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Stake Song</h2>
        </div>

        {/* Description Row */}
        <div className="text-center">
          <p className="text-gray-500">Stake your songcoins to earn COOP</p>
        </div>

        {/* Labels Row */}
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Amount to lock</span>
          <TokenBalance />
        </div>

        {/* Input Row */}
        <StakeInput />

        {/* Note Row */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Locked for 90 Days until 03/20/25
          </p>
        </div>

        {/* Dotted Line Row */}
        <div className="border-t border-dashed border-gray-200" />

        {/* Earn Row */}
        <div className="flex justify-between items-center">
          <span className="font-medium">Earn</span>
          <div className="flex items-center gap-2">
            <span className="font-medium">1000</span>
            <Image
              src="https://ipfs.decentralized-content.com/ipfs/QmcTqdWEkevrzESmS8um7i88kcM3AY5oLLbKSZL3ToPqjX"
              alt="COOP token"
              width={20}
              height={20}
              className="rounded-full"
            />
          </div>
        </div>
        <StakeButton />
      </Card>
    </main>
  );
}
