import { MovieData } from "@/utilities/interfaces";
import { Link } from "react-router-dom";

interface TrendsListProps {
  movies: MovieData[];
}
const TrendsList = ({ movies }: TrendsListProps) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendsList;
