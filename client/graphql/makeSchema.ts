import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers";
import { typeDefs } from "./__generated__/typedefs";

export const schema = makeExecutableSchema({ typeDefs, resolvers });
