import { Address } from "viem";
import { erc20Abi } from "./abis/erc20";
import { stakingAbi } from "./abis/staking";
import { publicClient } from "./client";

const IJN_TOKEN_ADDRESS = "0x2Da1F02de055Cebe51c6f6526ed67Ad0dc86f431";
const STAKING_CONTRACT_ADDRESS = "0x64C4dBa436D6F8993371f5fD915314bc268DEBB5";

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
