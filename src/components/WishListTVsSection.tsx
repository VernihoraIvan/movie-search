import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Loader } from "./Loader";
import { TVData } from "@/utilities/interfaces";
import { getfavoriteTVs } from "@/redux/favorite/selectors";
import TVCard from "./TVCard";
import { fetchFavoritesTVs } from "@/api/connection";

const WishlistTVsSection = () => {
  const [tvs, setTVs] = useState<TVData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const favoriteMovies = useSelector(getfavoriteTVs);
  useEffect(() => {
    const getFavoriteTVData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchFavoritesTVs(favoriteMovies);
        setTVs(data);
      } catch (error) {
        console.log("error", error);
        setTVs([]);
      } finally {
        setIsLoading(false);
      }
    };
    getFavoriteTVData();
  }, [favoriteMovies]);

  if (tvs.length === 0) {
    return null;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="xl:flex xl:flex-col xl:pl-10">
      <h2 className=" mb-10 sm:text-center xxs:ml-0  ml-28 text-3xl">
        List of favorite TVs
      </h2>
      <div>
        <ul className=" md:px-14 flex xs:justify-center sm:px-2 justify-start gap-x-16 gap-y-10 flex-wrap">
          {tvs?.map((tv) => (
            <li className="w-cardW h-cardH" key={tv.id}>
              <TVCard movie={tv} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WishlistTVsSection;
