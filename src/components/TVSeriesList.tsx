import { useEffect, useState } from "react";
import { TVData } from "@/utilities/interfaces";
import { fetchTVSeries } from "@/api/connection";
import TVCard from "./TVCard";

interface TVSeriesListProps {
  tv: TVData[];
}

const TVSeriesList = ({ tv }: TVSeriesListProps) => {
  const [movies, setMovies] = useState<TVData[]>([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchTVSeries();
        console.log(data);
        setMovies(data);
      } catch (error) {
        console.log("error", error);
        if (tv) {
          setMovies(tv);
        } else {
          setMovies([]);
        }
      }
    };
    getMovies();
  }, [tv]);

  const dataArray = tv ? tv : movies;
  return (
    <div>
      <h2 className="ml-28 text-3xl">TV series</h2>
      <ul className="m-auto flex justify-center  gap-x-16 gap-y-10 flex-wrap">
        {dataArray.map((movie) => (
          <li className="w-cardW h-cardH" key={movie.id}>
            <TVCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TVSeriesList;
