import { TVData } from "@/utilities/interfaces";
import TVCard from "./TVCard";

interface TVSeriesListProps {
  tv: TVData[];
}

const TVSeriesList = ({ tv }: TVSeriesListProps) => { 
  return (
    <div className="xl:flex xl:flex-col xl:pl-10">
      <h2 className="sm:text-center mb-10 xxs:ml-0  ml-28 text-3xl">
        TV series Trends
      </h2>
      <ul className="md:px-14 flex xs:justify-center sm:px-2 justify-start gap-x-16 gap-y-10 flex-wrap">
        {tv.map((movie) => (
          <li className="w-cardW h-cardH" key={movie.id}>
            <TVCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TVSeriesList;
