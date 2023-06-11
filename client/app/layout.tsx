"use client";

import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "../relay";

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
          {children}
        </RelayEnvironmentProvider>
      </body>
    </html>
  );
}
