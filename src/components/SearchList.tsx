import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { MovieData } from "@/utilities/interfaces";

interface MoviesListProps {
  list: MovieData[];
}

const MoviesList = ({ list }: MoviesListProps) => {
  const location = useLocation();

  return (
    <ul>
      {list &&
        list.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      ;
    </ul>
  );
};

export default MoviesList;
