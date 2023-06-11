"use client";

import { graphql, useFragment } from "react-relay/hooks";
import type { MemoCard_timeline$key } from "../graphql/queries/MemoCard_timeline.graphql";

const MemoCardFragment = graphql`
  fragment MemoCard_timeline on Timeline {
    message
  }
`;

interface MemoCardProps {
  memo: MemoCard_timeline$key;
}

function MemoCard(props: MemoCardProps) {
  const data = useFragment(MemoCardFragment, props.memo);
  return <div>{data.message}</div>;
}

export default MemoCard;
