import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { MovieData } from "@/utilities/interfaces";
import { fetchMovies } from "@/api/connection";

interface TrendsListProps {
  list?: MovieData[];
}

const TrendsList = ({ list }: TrendsListProps) => {
  const [movies, setMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    if (list) {
      const getMovies = async () => {
        try {
          const data = await fetchMovies();
          setMovies(data);
        } catch (error) {
          console.log("error", error);
          if (list) {
            setMovies(list);
          } else {
            setMovies([]);
          }
        }
      };
      getMovies();
    } else {
      const getTVs = async () => {
        try {
          const data = await fetchMovies();
          setMovies(data);
        } catch (error) {
          console.log("error", error);
          if (list) {
            setMovies(list);
          } else {
            setMovies([]);
          }
        }
      };
      getTVs();
    }
  }, [list]);

  const dataArray = list ? list : movies;
  return (
    <div>
      <h2 className=" sm:text-center xxs:ml-0 mb-10  ml-28 text-3xl">Movies</h2>
      <ul className=" md:px-14 flex xs:justify-center sm:px-2 justify-start gap-x-16 gap-y-10 flex-wrap">
        {dataArray.map((movie) => (
          <li className="w-cardW h-cardH" key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendsList;
