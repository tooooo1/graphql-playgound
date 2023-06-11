import { graphql, GraphQLArgs } from "graphql";
import { schema } from "../../graphql/makeSchema";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const args: GraphQLArgs = {
    schema,
    source: req.body.query,
    variableValues: req.body.variables,
  };

  // Run GraphQL query against your schema
  const result = await graphql(args);

  return res.json(result);
}
