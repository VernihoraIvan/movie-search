import { fetchMovies } from "@/api/connection";
import { useEffect, useState } from "react";
import { MovieData } from "@/utilities/interfaces";
import TrendsList from "@/components/TrendsList";

const TrendPage = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.log("error", error);
        setMovies([]);
      }
    };
    getMovies();
  });
  return (
    <div className="ml-60">
      <TrendsList movies={movies} />
    </div>
  );
};

export default TrendPage;
