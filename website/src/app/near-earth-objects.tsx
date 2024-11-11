"use client";

import { useEffect, useState } from "react";

interface NEO {
  id: string;
  name: string;
}

const NEOS: React.FC = () => {
  const [neos, setNeos] = useState<NEO[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNEOs = async () => {
      try {
        // TODO: Make this an env variable
        // const API_KEY = process.env.NASA_API_KEY;
        const API_KEY = "Ym8l39Zplygqd9Gy36b3nc7uvY4wAGZzoS5GOtA9";
        const response = await fetch(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-09-07&end_date=2023-09-08&api_key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);

        // Flatten the NEOs array
        const neosArray: any = Object.values(data.near_earth_objects).flat();
        setNeos(neosArray);

        console.log(neosArray); // Log the updated neosArray
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchNEOs();
  }, []);

  return (
    <div>
      <h1>Near Earth Objects</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {neos.length > 0 ? (
            neos.map((neo) => <li key={neo.id}>{neo.name}</li>)
          ) : (
            <li>No data available</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default NEOS;
