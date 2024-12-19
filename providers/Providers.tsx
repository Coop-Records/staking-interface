import PrivyProvider from "./PrivyProvider";
import QueryProvider from "./QueryProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <PrivyProvider>{children}</PrivyProvider>
    </QueryProvider>
  );
}
