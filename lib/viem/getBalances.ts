import { Address, erc20Abi } from "viem";
import { stakingAbi } from "@/lib/abis/staking";
import { publicClient } from "./client";
import { STAKING_CONTRACT_ADDRESS } from "../consts";
import { IJN_TOKEN_ADDRESS } from "../consts";

export async function getBalances(address: Address) {
  const [tokenBalance, stakedBalance, allowance] = await publicClient.multicall(
    {
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
        {
          address: IJN_TOKEN_ADDRESS,
          abi: erc20Abi,
          functionName: "allowance",
          args: [address, STAKING_CONTRACT_ADDRESS],
        },
      ],
    }
  );

  return {
    tokenBalance: tokenBalance.result,
    stakedBalance: stakedBalance.result,
    allowance: allowance.result,
  };
}
