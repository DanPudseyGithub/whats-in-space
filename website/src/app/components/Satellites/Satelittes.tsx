"use client";

import { FC, useEffect, useState } from "react";
import axios from "axios";
import Globe from "react-globe.gl";
import norad from "../../norad.json";
import Tooltip from "./Atoms/Tooltip/Tooltip";

const N2YO_API_KEY = process.env.N2YO_API_KEY;

const SATELLITES = [
  {
    name: "ISS",
    url: `/api/rest/v1/satellite/positions/${norad.international_space_station.id}/41.702/-76.014/0/2/&apiKey=${N2YO_API_KEY}`,
    description: norad.international_space_station.description,
  },
  {
    name: "Hubble Space Telescope",
    url: `/api/rest/v1/satellite/positions/${norad.hubble_space_telescope.id}/41.702/-76.014/0/2/&apiKey=${N2YO_API_KEY}`,
    description: norad.hubble_space_telescope.description,
  },
];

export const Satellites: FC = () => {
  const [satellitePositions, setSatellitePositions] = useState<
    { name: string; lat: number; lng: number; alt: number }[]
  >([]);
  const [clickedPoints, setClickedPoints] = useState<
    {
      description: string;
      name: string;
      lat: number;
      lng: number;
      alt: number;
    }[]
  >([]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const fetchSatellitePosition = async (url: string) => {
          const response = await axios.get(url);
          const positions = response.data.positions;
          return positions && positions.length > 0 ? positions[0] : null;
        };

        const positions = await Promise.all(
          SATELLITES.map(async (satellite) => {
            const position = await fetchSatellitePosition(satellite.url);
            if (position) {
              const { satlatitude, satlongitude, sataltitude } = position;
              return {
                name: satellite.name,
                description: satellite.description,
                lat: satlatitude,
                lng: satlongitude,
                alt: sataltitude,
              };
            }
            return null;
          })
        );

        setSatellitePositions(positions.filter((pos) => pos !== null) as any);
      } catch (error) {
        console.error("Error fetching satellite positions:", error);
      }
    };

    fetchPositions();
    const interval = setInterval(fetchPositions, 20000); // Update every 20 seconds

    return () => clearInterval(interval);
  }, []);

  const MAX_ALTITUDE_KM = 1000; // Define a reasonable maximum altitude for normalization

  const pointAltitude = (point: any) => {
    return point.alt / MAX_ALTITUDE_KM;
  };

  const pointName = (point: any) => {
    return point.name;
  };

  const pointClickEvent = (point: any, event: string) => {
    console.log("point clicked:", point, event);
    setClickedPoints((prevPoints) => [...prevPoints, point]);
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        pointsData={satellitePositions}
        pointAltitude={(point) => pointAltitude(point)}
        pointColor={() => "white"}
        pointLabel={(point) => pointName(point)}
        atmosphereColor="red"
        onPointClick={(point) => pointClickEvent(point, "event")}
      />
      {clickedPoints.map((point, index) => (
        <Tooltip key={index} point={point} />
      ))}
    </div>
  );
};

export default Satellites;
