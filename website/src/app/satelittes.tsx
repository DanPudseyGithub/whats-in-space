"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Globe from "react-globe.gl";

const ISS_API_URL =
  "https://api.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/2/&apiKey=DYZSTK-S64CJF-PGXW4N-3YYP";

const ISS_API_URL_2 =
  "https://api.n2yo.com/rest/v1/satellite/tle/25544&apiKey=DYZSTK-S64CJF-PGXW4N-3YYP";

export const Satellites: React.FC = () => {
  const [issPosition, setIssPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    const fetchISSData = async () => {
      try {
        const response = await axios.get(ISS_API_URL_2);
        console.log({ response });
      } catch (error) {
        console.error("Error fetching ISS data:", error);
      }
    };
    const fetchISSPosition = async () => {
      try {
        const response = await axios.get(ISS_API_URL);
        const { positions } = response.data;
        console.log({ positions });
        if (positions && positions.length > 0) {
          const { satlatitude, satlongitude } = positions[0];
          setIssPosition({ lat: satlatitude, lng: satlongitude });
        }
      } catch (error) {
        console.error("Error fetching ISS position:", error);
      }
    };
    fetchISSData();
    fetchISSPosition();
    //const interval = setInterval(fetchISSPosition, 50000); // Update every 5 seconds

    // return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        pointsData={issPosition ? [issPosition] : []}
        pointAltitude={0.01}
        pointColor={() => "red"}
      /> */}
    </div>
  );
};

export default Satellites;
