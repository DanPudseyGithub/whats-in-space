"use client";
import React, { useEffect } from "react";
import axios from "axios";

const SatellitesCopy: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/api/rest/v1/satellite/tle/25544&apiKey=DYZSTK-S64CJF-PGXW4N-3YYP"
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Satellites Data</h1>
    </div>
  );
};

export default SatellitesCopy;
