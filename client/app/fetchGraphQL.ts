const fetchGraphQL = async (text: string, variables: any) => {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return response.json();
};

export default fetchGraphQL;
