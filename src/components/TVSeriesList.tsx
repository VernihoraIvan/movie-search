import { useEffect, useState } from "react";
// import MovieCard from "./MovieCard";
import { TVData } from "@/utilities/interfaces";
import { fetchTVSeries } from "@/api/connection";
import TVCard from "./TVCard";

interface TVSeriesListProps {
  tv: TVData[];
}

const TVSeriesList = ({ tv }: TVSeriesListProps) => {
  const [movies, setMovies] = useState<TVData[]>([]);
  console.log(tv);
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
    <ul
      className=" m-auto	px-5	flex justify-center pt-5 grid grid-cols-5 grid-rows-5 gap-x-10 gap-y-10
      "
    >
      {dataArray.map((movie) => (
        <li key={movie.id}>
          <TVCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default TVSeriesList;
