"use client";

import { useState } from "react";

export function StakeInput() {
  const [stakeAmount, setStakeAmount] = useState<string>("");

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
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
    </div>
  );
}
