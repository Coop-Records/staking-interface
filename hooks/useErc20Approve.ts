import { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";

import { approveIJN } from "@/lib/viem/approve";
import { useWalletClient } from "./useWalletClient";
import { CHAIN } from "@/lib/consts";

export function useErc20Approve() {
  const [isApproving, setIsApproving] = useState(false);
  const { user } = usePrivy();
  const { walletClient } = useWalletClient();

  const approve = async (amount: string) => {
    if (!user?.wallet?.address || !window.ethereum) {
      throw new Error("No wallet connected");
    }

    try {
      if (!walletClient) {
        throw new Error("No wallet client");
      }
      setIsApproving(true);
      await walletClient.switchChain({ id: CHAIN.id });
      const hash = await approveIJN(walletClient, amount);
      return hash;
    } catch (error) {
      console.error("Error approving tokens:", error);
      throw error;
    } finally {
      setIsApproving(false);
    }
  };

  return {
    approve,
    isApproving,
  };
}
