export const typeDefs = `schema{query:Query}interface Node{id:ID!}type Query{timeline:[Timeline!]!}type Timeline implements Node{id:ID!message:String!}`;