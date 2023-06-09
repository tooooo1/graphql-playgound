"use client";

import { useEffect, useState } from "react";
import { MemoTimeline } from "../components";
import fetchGraphQL from "./fetchGraphQL";

const Page = () => {
  const [hello, setHello] = useState("");

  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(
      `
      query RootQuery {
        hello
      }
    `,
      {}
    )
      .then((response) => {
        setHello(response.data.hello);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <h1>시간여행자의 메모 : Time Traveler`s Memo</h1>
      <MemoTimeline hello={hello} />
    </>
  );
};

export default Page;
