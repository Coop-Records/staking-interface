import { Address } from "viem";
import { erc20Abi } from "./abis/erc20";
import { stakingAbi } from "./abis/staking";
import { publicClient } from "./client";

const IJN_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_IJN_TOKEN_ADDRESS as Address;
const STAKING_CONTRACT_ADDRESS = process.env
  .NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS as Address;

export async function getBalances(address: Address) {
  const [tokenBalance, stakedBalance] = await publicClient.multicall({
    contracts: [
      {
        address: IJN_TOKEN_ADDRESS,
        abi: erc20Abi,
        functionName: "balanceOf",
        args: [address],
      },
      {
        address: STAKING_CONTRACT_ADDRESS,
        abi: stakingAbi,
        functionName: "balanceOf",
        args: [address],
      },
    ],
  });

  return {
    tokenBalance: tokenBalance.result,
    stakedBalance: stakedBalance.result,
  };
}
