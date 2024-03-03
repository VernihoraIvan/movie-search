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
    <div className="xl:flex xl:flex-col xl:pl-10">
      <h2 className=" mb-10 sm:text-center xxs:ml-0  ml-28 text-3xl">
        List of favorite TVs
      </h2>
      <div>
        <ul className=" md:px-14 flex xs:justify-center sm:px-2 justify-start gap-x-16 gap-y-10 flex-wrap">
          {movies?.map((movie) => (
            <li className="w-cardW h-cardH" key={movie.id}>
              <TVCard movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WishlistTVsSection;
