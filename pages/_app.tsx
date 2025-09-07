import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { AppProps } from "next/app";
import { useState } from "react";
import dynamic from "next/dynamic";
import "@/styles/globals.css";

// Dynamic imports for client-side only components
const Toaster = dynamic(() => import("@/components/ui/toaster").then(mod => ({ default: mod.Toaster })), {
  ssr: false
});

const Sonner = dynamic(() => import("@/components/ui/sonner").then(mod => ({ default: mod.Toaster })), {
  ssr: false
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Component {...pageProps} />
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}