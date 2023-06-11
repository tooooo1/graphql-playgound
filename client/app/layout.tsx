"use client";

import { RelayEnvironmentProvider } from "react-relay/hooks";
import { environment } from "../relay";
import { Suspense } from "react";

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
