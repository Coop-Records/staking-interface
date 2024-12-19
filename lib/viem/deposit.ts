import { Address, WalletClient, parseEther } from "viem";
import { stakingAbi } from "@/lib/abis/staking";
import { STAKING_CONTRACT_ADDRESS, CHAIN } from "../consts";

export async function depositIJN(walletClient: WalletClient, amount: string) {
  const parsedAmount = parseEther(amount);

  const hash = await walletClient.writeContract({
    address: STAKING_CONTRACT_ADDRESS,
    abi: stakingAbi,
    functionName: "deposit",
    args: [parsedAmount],
    chain: CHAIN,
    account: walletClient.account?.address as Address,
  });

  return hash;
}
