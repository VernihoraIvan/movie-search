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
    <ul
      className=" m-auto flex justify-center grid grid-cols-5 grid-rows-5 gap-x-10 gap-y-10
      "
    >
      {list.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default SearchList;
