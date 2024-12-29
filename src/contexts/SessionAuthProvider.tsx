"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface Props {
  children: React.ReactNode;
  session?: Session | null;
}

export default function SessionAuthProvider({ children, session }: Props) {
  return (
    <SessionProvider
      session={session}
      refetchInterval={30 * 60}
      refetchOnWindowFocus={false}
    >
      {children}
    </SessionProvider>
  );
}
