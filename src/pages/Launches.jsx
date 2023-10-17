import React from "react";
import useFetch from "../hooks/useFetch";
import { Loading } from "../components";

export default function Launches() {
  const [data] = useFetch("https://api.spacexdata.com/v4/launches");

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <section className="py-32 max-width">
          <h1 className="heading text-center mb-10">Launches</h1>
        </section>
      )}
    </>
  );
}
