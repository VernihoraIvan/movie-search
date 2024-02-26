import { useEffect, useState } from "react";
// import MovieCard from "./MovieCard";
import { MovieData } from "@/utilities/interfaces";
import { fetchMovies } from "@/api/connection";
import { useSelector } from "react-redux";
import { getfavoriteMovies } from "@/redux/favorite/selectors";
import MovieCard from "./MovieCard";

// interface WishlistProps {
//   list?: MovieData[];
// }

const WishlistMoviesSection = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);

  const favoriteMovies = useSelector(getfavoriteMovies);
  console.log(favoriteMovies);
  useEffect(() => {
    const getFavoriteMoviesData = async () => {
      try {
        const data = await fetchMovies();
        console.log(data);

        setMovies(data.filter((movie) => favoriteMovies.includes(movie.id)));
      } catch (error) {
        console.log("error", error);
        setMovies([]);
      }
    };
    getFavoriteMoviesData();
  }, [favoriteMovies]);
  console.log(movies);

  // const dataArray = list ? list : movies;
  return (
    <ul
      className=" m-auto	px-5	flex justify-center pt-5 grid grid-cols-5 grid-rows-5 gap-x-10 gap-y-10
      "
    >
      {movies?.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default WishlistMoviesSection;
