"use client";

import { RelayEnvironmentProvider } from "react-relay/hooks";
import { environment } from "../relay";
import { Suspense } from "react";

export const metadata = {
  title: "퉁이리 GraphQL + Relay",
  description: "GraphQL + Relay playground",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <RelayEnvironmentProvider environment={environment}>
          <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
        </RelayEnvironmentProvider>
      </body>
    </html>
  );
}
