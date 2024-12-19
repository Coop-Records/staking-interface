import { useQuery } from "@tanstack/react-query";
import { usePrivy } from "@privy-io/react-auth";
import { getBalances } from "@/lib/viem/getBalances";
import { Address } from "viem";

export function useBalances() {
  const { user, authenticated } = usePrivy();
  const walletAddress = user?.wallet?.address as Address;

  return useQuery({
    queryKey: ["balances", walletAddress],
    queryFn: () => getBalances(walletAddress),
    enabled: authenticated && !!walletAddress,
    refetchInterval: 10000, // Refetch every 10 seconds
  });
}
