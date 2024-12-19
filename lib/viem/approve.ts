import { Address, parseEther, WalletClient } from "viem";
import { erc20Abi } from "../abis/erc20";
import { STAKING_CONTRACT_ADDRESS, CHAIN } from "../consts";
import { IJN_TOKEN_ADDRESS } from "../consts";

export async function approveIJN(walletClient: WalletClient, amount: string) {
  const parsedAmount = parseEther(amount);

  const hash = await walletClient.writeContract({
    address: IJN_TOKEN_ADDRESS,
    abi: erc20Abi,
    functionName: "approve",
    args: [STAKING_CONTRACT_ADDRESS, parsedAmount],
    chain: CHAIN,
    account: walletClient.account?.address as Address,
  });

  return hash;
}
