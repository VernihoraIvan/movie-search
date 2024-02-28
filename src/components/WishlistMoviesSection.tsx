import { useEffect, useState } from "react";
// import MovieCard from "./MovieCard";
import { MovieData } from "@/utilities/interfaces";
import { fetchMovies } from "@/api/connection";
import { useSelector } from "react-redux";
import { getfavoriteMovie } from "@/redux/favorite/selectors";
import MovieCard from "./MovieCard";

const WishlistMoviesSection = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);

  const favoriteMovies = useSelector(getfavoriteMovie);
  useEffect(() => {
    const getFavoriteMovieData = async () => {
      try {
        const data = await fetchMovies();
        console.log(data);

        setMovies(data.filter((movie) => favoriteMovies.includes(movie.id)));
      } catch (error) {
        console.log("error", error);
        setMovies([]);
      }
    };
    getFavoriteMovieData();
  }, [favoriteMovies]);

  if (movies.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-3xl">List of favorite movies</h2>
      <ul
        className=" m-auto flex justify-center grid grid-cols-5 grid-rows-5 gap-x-10 gap-y-10
      "
      >
        {movies?.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishlistMoviesSection;
