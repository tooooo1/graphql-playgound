import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // ...
  schema: "./schema/schema.graphql",
  ignoreNoDocuments: true,
  generates: {
    "./gql/schema.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
