"use client";

import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import { StakeInput } from "@/components/StakeInput";
import { usePrivy } from "@privy-io/react-auth";

export default function Home() {
  const { authenticated } = usePrivy();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-md mx-auto mt-20">
        <div className="flex items-center w-full justify-between">
          <h1 className="text-2xl font-bold mb-8">Stake IJN</h1>
          {authenticated ? <LogoutButton /> : <LoginButton />}
        </div>
        <StakeInput />
      </div>
    </main>
  );
}
