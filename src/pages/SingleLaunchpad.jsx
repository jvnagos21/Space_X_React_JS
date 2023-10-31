import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../components";

export default function SingleLaunchpad() {
  const [singleLaunchPad, setSigleLaunchPad] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleLaunchpad = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/launchpads/${id}`);
      const data = await res.json();
      setSigleLaunchPad(data);
    };
    fetchSingleLaunchpad();
  }, [id]);

  return (
    <>
      {!singleLaunchPad ? (
        <Loading />
      ) : (
        <section className="py-32 max-width grid grid-cols-1 gap-8 md:grid-cols-2">
          <article>
            <h1 className="heading">{singleLaunchPad.full_name}</h1>
            <h2 className="text-white text-2xl opacity-75 fontl-bold mt-2">
              {singleLaunchPad.name}
            </h2>
            <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <ul className="text-white opacity-75 text-sm flex flex-col items-start justify-start gap-3">
                <li>{singleLaunchPad.launch_attempts} Launch Attempts</li>
                <li>{singleLaunchPad.launch_successes} Sucessful Launches</li>
                {singleLaunchPad.status === "active" ? (
                  <li className="text-emerald-500 capitalize">
                    {singleLaunchPad.status}
                  </li>
                ) : (
                  <li className="text-rose-500 capitalize">
                    {singleLaunchPad.status}
                  </li>
                )}
              </ul>
              <ul className="text-white">
                <h3 className="text-white font-bold mb-1">Region</h3>
                <li className="text-sm opacity-75 mb-2">
                  Locality: {singleLaunchPad.locality}
                </li>
                <li className="text-sm opacity-75">
                  Region: {singleLaunchPad.region}
                </li>
              </ul>
            </div>
            <p className="text-white opacity-75 mb-10">
              {singleLaunchPad.details}
            </p>
            <ul>
              <li>
                <Link
                  to="/launchpads"
                  className="text-white opacity-75 text-sm hover:opacity-100"
                >
                  &larr; Back
                </Link>
              </li>
            </ul>
          </article>

          <article>
            <img
              src={singleLaunchPad.images.large[0]}
              alt={singleLaunchPad.name}
              className="h-full object-cover"
            />
          </article>
        </section>
      )}
    </>
  );
}
