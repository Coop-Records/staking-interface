import { type ReactNode } from "react";
import PrivyProvider from "./PrivyProvider";
import QueryProvider from "./QueryProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <PrivyProvider>{children}</PrivyProvider>
    </QueryProvider>
  );
}
