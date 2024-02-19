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
      console.log("if list");
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
      console.log("else list");
    }
  }, [list]);
  console.log(movies);

  const dataArray = list ? list : movies;
  return (
    <ul
      className=" m-auto	px-5	flex justify-center pt-5 grid grid-cols-5 grid-rows-5 gap-x-10 gap-y-10
      "
    >
      {dataArray.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default TrendsList;
