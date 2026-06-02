import { useState, useEffect } from "react";

/*
Requirements:
- Fetch data from an API
- Add:
  - loading state
  - error state
- Show:
  - "Loading..." while fetching
  - Error message if request fails
  - Data when successful
*/

interface JokeData {
  id: string;
  joke: string;
  status: number;
}

export default function FetchWithStates() {
 
  const [data, setData] = useState<JokeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchJoke() {
      try {
        setLoading(true);
        setError(null);

       
        const response = await fetch("https://icanhazdadjoke.com/", {
          signal: abortController.signal,
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result: JokeData = await response.json();
        setData(result);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message || "Failed to fetch a joke.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchJoke();

    return () => {
      abortController.abort();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  return (
    <div>
      {data ? (
        <div style={{ maxWidth: "400px", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
          <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>"{data.joke}"</p>
        </div>
      ) : (
        <p>No joke found.</p>
      )}
    </div>
  );
}