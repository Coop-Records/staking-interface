import { useState } from "react";
import { parseEther } from "viem";
import { depositIJN } from "@/lib/viem/deposit";
import { useBalances } from "./useBalances";
import { useWalletClient } from "./useWalletClient";

export function useStakeDeposit() {
  const [isDepositing, setIsDepositing] = useState(false);
  const { data: balances } = useBalances();
  const { walletClient } = useWalletClient();

  const deposit = async (amount: string) => {
    if (!walletClient) {
      throw new Error("No wallet connected");
    }

    const parsedAmount = parseEther(amount);
    const currentAllowance = balances?.allowance ?? BigInt(0);

    if (parsedAmount > currentAllowance) {
      throw new Error("Insufficient allowance");
    }

    try {
      setIsDepositing(true);
      const hash = await depositIJN(walletClient, amount);
      return hash;
    } catch (error) {
      console.error("Error depositing tokens:", error);
      throw error;
    } finally {
      setIsDepositing(false);
    }
  };

  return {
    deposit,
    isDepositing,
  };
}
