"use client";

import { graphql, useLazyLoadQuery } from "react-relay/hooks";

function MemoCard() {
  const data = useLazyLoadQuery(
    graphql`
      query MemoCardQuery {
        timeline {
          message
        }
      }
    `,
    {}
  );

  return <div>{data?.timeline?.message}</div>;
}

export default MemoCard;
