"use client";

import LoginButton from "@/components/LoginButton";
import { StakeInput } from "@/components/StakeInput";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-md mx-auto mt-20">
        <div className="flex items-center w-full justify-between">
          <h1 className="text-2xl font-bold mb-8">Stake IJN</h1>
          <LoginButton />
        </div>
        <StakeInput />
      </div>
    </main>
  );
}
