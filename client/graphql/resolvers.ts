"use client";

import { Resolvers } from "./__generated__/types";

const resolvers: Resolvers = {
  Query: {
    async timeline() {
      const response = await fetch("http://localhost:4000/timeline");
      return response.json();
    },
  },
};

export default resolvers;
