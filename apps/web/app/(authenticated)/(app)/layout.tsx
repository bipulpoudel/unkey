import { CommandMenu } from "@/components/dashboard/command-menu";
import { Toaster } from "@/components/ui/toaster";
import { ReactQueryProvider } from "./react-query-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      {children}
      <Toaster />
      <CommandMenu />
    </ReactQueryProvider>
  );
}
