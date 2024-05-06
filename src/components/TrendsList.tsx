import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { MovieData } from "@/utilities/interfaces";
import { fetchMovies } from "@/api/connection";
import { Loader } from "./Loader";

const TrendsList = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="xl:flex xl:flex-col xl:pl-10">
      <h2 className=" sm:text-center xxs:ml-0 mb-10  ml-28 text-3xl">
        Movies Trends
      </h2>
      <ul className=" md:px-14 flex xs:justify-center sm:px-2 justify-start  gap-x-16 gap-y-10 flex-wrap">
        {movies.map((movie) => (
          <li className="w-cardW h-cardH" key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendsList;
