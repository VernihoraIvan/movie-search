// import { MovieData } from "@/utilities/interfaces";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { MovieData } from "@/utilities/interfaces";
import { fetchMovies } from "@/api/connection";

// interface TrendsListProps {
//   movies: MovieData[];
// }

const TrendsList = () =>
  // { movies }: TrendsListProps
  {
    const [movies, setMovies] = useState<MovieData[]>([]);
    // const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      const getMovies = async () => {
        try {
          const data = await fetchMovies();
          console.log(data);
          setMovies(data);
        } catch (error) {
          console.log("error", error);
          setMovies([]);
        }
      };
      getMovies();
    }, []);
    return (
      // <ul>
      //   {movies.map((movie) => (
      //     <li key={movie.id}>
      //       <MovieCard movie={movie} />
      //     </li>
      //   ))}
      // </ul>
      <ul
        className="
      // flex gap-10 flex-wrap
      grid grid-cols-5 grid-rows-5 gap-x-10 gap-y-10
      "
      >
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    );
  };

export default TrendsList;
