"use client";

import { graphql, useLazyLoadQuery } from "react-relay/hooks";
import type { MemoCardQuery } from "../graphql/queries/MemoCardQuery.graphql";

const MemoCard = () => {
  const data = useLazyLoadQuery<MemoCardQuery>(
    graphql`
      query MemoCardQuery {
        timeline {
          message
        }
      }
    `,
    {}
  );

  return (
    <div>
      {data.timeline.map((item, index) => (
        <div key={index}>{item.message}</div>
      ))}
    </div>
  );
};

export default MemoCard;
