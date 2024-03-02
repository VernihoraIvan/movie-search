import { MovieData } from "@/utilities/interfaces";
import MovieCard from "./MovieCard";

interface MoviesListProps {
  list: MovieData[];
}

const SearchList = ({ list }: MoviesListProps) => {
  if (!list) {
    return null;
  }
  return (
    <div className="xl:flex xl:flex-col xl:pl-10">
      <ul className=" md:px-14 flex xs:justify-center  sm:px-2 justify-start gap-x-16 gap-y-10 flex-wrap">
        {list.map((movie) => (
          <li className="w-cardW h-cardH" key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
