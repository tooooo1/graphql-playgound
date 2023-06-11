import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./graphql/schema.graphql",
  generates: {
    "graphql/__generated__/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
    "graphql/__generated__/typedefs.ts": {
      plugins: ["graphql/codegen-typedefs.js"],
    },
  },
};

export default config;
