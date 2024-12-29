"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../client/query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";
import SessionAuthProvider from "@/contexts/SessionAuthProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionAuthProvider>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          {children}
        </SnackbarProvider>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionAuthProvider>
  );
};

export default Providers;
