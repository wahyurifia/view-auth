import { fetchDataFromSupabase } from "@/data/datasUsers";
import React, { useEffect } from "react";

export function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataFromSupabase('user');
        console.log(result);

      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mt-12">

    </div>
  );
}

export default Home;
