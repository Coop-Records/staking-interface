import { CHAIN } from "@/lib/consts";
import { useWallets } from "@privy-io/react-auth";
import { useState } from "react";
import { useEffect } from "react";
import { Address, createWalletClient, custom, WalletClient } from "viem";

export const useWalletClient = () => {
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null);
  const { wallets } = useWallets();
  const wallet = wallets[0];

  useEffect(() => {
    if (!wallet) return;
    const initWalletClient = async () => {
      const provider = await wallet.getEthereumProvider();
      const walletClient = createWalletClient({
        chain: CHAIN,
        account: wallet.address as Address,
        transport: custom(provider),
      });
      setWalletClient(walletClient);
    };

    initWalletClient();
  }, [wallet]);

  return { walletClient };
};
