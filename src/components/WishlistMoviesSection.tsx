import { useEffect, useState } from "react";
// import MovieCard from "./MovieCard";
import { MovieData } from "@/utilities/interfaces";
import { fetchFavorites } from "@/api/connection";
import { useSelector } from "react-redux";
import { getfavoriteMovie } from "@/redux/favorite/selectors";
import MovieCard from "./MovieCard";

const WishlistMoviesSection = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);

  const favoriteMovies = useSelector(getfavoriteMovie);
  useEffect(() => {
    const getFavoriteMovieData = async () => {
      try {
        const data = await fetchFavorites(favoriteMovies);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getFavoriteMovieData();
  }, [favoriteMovies]);

  if (movies.length === 0) {
    return null;
  }

  return (
    <div className="xl:flex xl:flex-col xl:pl-10">
      <h2 className=" mb-10 sm:text-center xxs:ml-0  ml-28 text-3xl">
        List of favorite movies
      </h2>
      <ul className="mb-16  md:px-14 flex  xs:justify-center sm:px-2 justify-start gap-x-16 gap-y-10 flex-wrap">
        {movies?.map((movie) => (
          <li className="w-cardW h-cardH" key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishlistMoviesSection;
