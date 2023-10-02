import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../components";

export default function SingleDragon() {
  const [singleDragon, setSingleDragon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleDragon = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/dragons/${id}`);
      const data = await res.json();
      setSingleDragon(data);
    };

    fetchSingleDragon();
  }, [id]);

  return (
    <>
      {!singleDragon ? (
        <Loading />
      ) : (
        <section className="py-32 max-width">
          <article>
            <h1>{singleDragon.name}</h1>
            <h2>First Flight Date: {singleDragon.first_flight}</h2>
            <div>
              <ul>
                <li>Type: {singleDragon.type}</li>
                <li>Crew: {singleDragon.crew_capacity}</li>
                <li>Dry Mass: {singleDragon.dry_mass_lb}</li>
                <li>Active: {singleDragon.active}</li>
                <li>
                  <a
                    href={singleDragon.wikipedia}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Wikipedia
                  </a>
                </li>
              </ul>
              <ul>
                <h3>Heat Shield details</h3>
                <li>Material: {singleDragon.heat_shield.material}</li>
                <li>Size: {singleDragon.heat_shield.size_feet}</li>
                <li>
                  Temperature: {singleDragon.heat_shield.temp_degrees} Degrees
                </li>
                <li>Dev Partner: {singleDragon.heat_shield.dev_partner}</li>
              </ul>
            </div>
            <p>{singleDragon.description}</p>
            <div>
              {/* meters*/}
              <ul>
                <li>
                  Launch Payload Mass: {singleDragon.launch_payload_mass.kg}{" "}
                </li>
                <li>
                  Return Payload Mass:{singleDragon.return_payload_mass.kg}
                </li>
                <li>
                  Pressurized Capsule Payload Volume:{" "}
                  {singleDragon.pressurized_capsule.payload_volume.cubic_meters}
                </li>
                <li>Height With Trunk: {singleDragon.height_w_trunk.meters}</li>
                <li>
                  Launch Payload Volume:{" "}
                  {singleDragon.launch_payload_vol.cubic_meters}
                </li>
                <li>
                  Return Payload Volume:{" "}
                  {singleDragon.pressurized_capsule.payload_volume.cubic_meters}
                </li>
                <li>
                  Trunk Volume: {singleDragon.trunk.trunk_volume.cubic_meters}
                </li>
                <li>Diameter: {singleDragon.diameter.meters}</li>
              </ul>

              {/*IMPERIAL*/}
              <ul>
                <li>
                  Launch Payload Mass: {singleDragon.launch_payload_mass.lb}{" "}
                </li>
                <li>
                  Return Payload Mass:{singleDragon.return_payload_mass.lb}
                </li>
                <li>
                  Pressurized Capsule Payload Volume:{" "}
                  {singleDragon.pressurized_capsule.payload_volume.cubic_feet}
                </li>
                <li>Height With Trunk: {singleDragon.height_w_trunk.feet}</li>
                <li>
                  Launch Payload Volume:{" "}
                  {singleDragon.launch_payload_vol.cubic_feet}
                </li>
                <li>
                  Return Payload Volume:{" "}
                  {singleDragon.return_payload_vol.cubic_feet}
                </li>
                <li>
                  Trunk Volume: {singleDragon.trunk.trunk_volume.cubic_feet}
                </li>
                <li>Diameter: {singleDragon.diameter.feet}</li>
              </ul>
            </div>
          </article>
          <img src={singleDragon.flickr_images[0]} alt={singleDragon.name} />
        </section>
      )}
    </>
  );
}
