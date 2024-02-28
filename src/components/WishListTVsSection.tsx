import { useEffect, useState } from "react";
import { TVData } from "@/utilities/interfaces";
import { fetchTVSeries } from "@/api/connection";
import { useSelector } from "react-redux";
import { getfavoriteTVs } from "@/redux/favorite/selectors";
import TVCard from "./TVCard";

const WishlistTVsSection = () => {
  const [movies, setMovies] = useState<TVData[]>([]);

  const favoriteMovies = useSelector(getfavoriteTVs);
  useEffect(() => {
    const getFavoriteMovieData = async () => {
      try {
        const data = await fetchTVSeries();
        console.log(data);

        setMovies(data.filter((movie) => favoriteMovies.includes(movie.id)));
      } catch (error) {
        console.log("error", error);
        setMovies([]);
      }
    };
    getFavoriteMovieData();
  }, [favoriteMovies]);
  console.log(movies);

  if (movies.length === 0) {
    return null;
  }
  return (
    <div>
      <h2 className="ml-28 text-3xl">List of favorite TVs</h2>
      <ul
        className=" m-auto flex justify-center grid grid-cols-5 grid-rows-5 gap-x-10 gap-y-10
      "
      >
        {movies?.map((movie) => (
          <li key={movie.id}>
            <TVCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishlistTVsSection;
