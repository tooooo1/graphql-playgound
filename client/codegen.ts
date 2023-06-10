import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // ...
  schema: "http://localhost:4000/graphql",
  documents: ["app/**/*.{ts, tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
