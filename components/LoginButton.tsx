"use client";

import { usePrivy } from "@privy-io/react-auth";

const LoginButton = () => {
  const { login } = usePrivy();

  return (
    <button
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      onClick={login}
    >
      Login
    </button>
  );
};

export default LoginButton;