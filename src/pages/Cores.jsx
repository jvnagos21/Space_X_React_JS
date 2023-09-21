import { useEffect, useState } from "react";
import { Loading } from "../components";

export default function Cores() {
  const [cores, setCores] = useState([]);

  useEffect(() => {
    const fetchCores = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/cores");
      const data = await res.json();
      setCores(data);
    };

    fetchCores();
  }, []);

  return (
    <>
      {!cores ? (
        <Loading />
      ) : (
        <section className="py-32">
          {" "}
          <h1 className="heading text-center mb-10">Cores</h1>
          <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cores.map(
              ({
                id,
                status,
                serial,
                launches,
                last_update,
                asds_landings,
                rtls_landings,
                reuse_count,
              }) => (
                <article key={id} className="articles">
                  <h2>{serial}</h2>
                  <ul>
                    <li>Reused {reuse_count} times</li>
                    <li>{launches.length} launches</li>
                    <li>{asds_landings} ASDS Landings</li>
                    <li>{rtls_landings} RTLS Landings</li>
                    {status === "active" ? (
                      <li className="text-emerald-500">Active</li>
                    ) : (
                      <li className="text-rose-500">{status}</li>
                    )}
                  </ul>
                  <p>{last_update}</p>
                </article>
              )
            )}
          </div>
        </section>
      )}
    </>
  );
}
