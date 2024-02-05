import { fetchMovies } from "@/api/connection";
import { useEffect } from "react";

const TrendPage = () => {
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies();
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getMovies();
  });
  return <div className="ml-60">TrendPage</div>;
};

export default TrendPage;
