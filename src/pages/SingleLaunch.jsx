import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../components";

export default function SingleLaunch() {
  const [singleLaunch, setSingleLaunch] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleLaunch = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
      const data = await res.json();
      setSingleLaunch(data);
    };
    fetchSingleLaunch();
  }, [id]);

  return (
    <>
      {!singleLaunch ? (
        <Loading />
      ) : (
        <section className="py-32 max-width grid grid-cols-1 gap-10 md:grid-cols-2">
          <article>
            <img src={singleLaunch.links.patch.large} alt={singleLaunch.name} />
          </article>
          <article>
            <h1 className="heading">{singleLaunch.name}</h1>
            <h2 className="text-white font-bold text-2xl opacity-75 mt-2">
              {" "}
              Launch Date: {singleLaunch.date_local},{" "}
              {singleLaunch.success ? (
                <span className="text-emerald-500">Sucessful</span>
              ) : (
                <span className="text-rose-500">Failed</span>
              )}
            </h2>
            <p className="text-white opacity-75 my-10">
              {singleLaunch.details}
            </p>
            <ul className="text-white text-sm opacity-75 mb-8">
              <li className="mb-3">
                Fairings:{" "}
                {singleLaunch.fairings.reused ? "Not Reused" : "Reused"}
              </li>
              <li>
                Recovered:{" "}
                {singleLaunch.fairings.recovered
                  ? "Fairings Not Recovered"
                  : "Fairings Recovered"}
              </li>
            </ul>
            <ul className="flex flex-wrap items-center justify-start gap-8">
              <li>
                <a
                  href={singleLaunch.links.article}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Read Article
                </a>
              </li>
              <li>
                {" "}
                <a
                  href={singleLaunch.links.presskit}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Presskit
                </a>
              </li>
              <li>
                {" "}
                <a
                  href={singleLaunch.links.webcast}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Watch Launch on Youtube
                </a>
              </li>
            </ul>
          </article>
        </section>
      )}
    </>
  );
}
