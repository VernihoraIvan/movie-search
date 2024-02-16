import { MovieData } from "@/utilities/interfaces";
import { unknownPhoto } from "@/utilities/other";
import { Link } from "react-router-dom";
import Star from "@/assets/icons/Star.svg?react";
import Favorite from "@/assets/icons/favorite.svg?react";
import NotFavorite from "@/assets/icons/notFavorite.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { getfavoriteMovies } from "@/redux/favorite/selectors";
import { favoriteMovies } from "@/redux/favorite/slice";
// export interface MovieCardProps {
//   id: number;
//   poster_path: string;
//   title: string;
// }

export interface MovieCardProps {
  movie: MovieData;
  // isFavorite: boolean;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  // console.log(isFavorite);
  const isFavorite = useSelector(getfavoriteMovies);
  const dispatch = useDispatch();
  console.log(isFavorite);

  const onToggle = (id: number) => {
    dispatch(favoriteMovies(id));
  };

  const isActive = isFavorite.includes(movie.id);

  return (
    <div className="relative">
      <Link className="flex h-full" to={`movies/${movie.id}`}>
        <div
          className=" rounded-lg shadow-xl col-span-1 row-span-1
      "
        >
          <img
            className="max-h-80"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : unknownPhoto
            }
            alt={movie.title}
          />
          <div className="px-2 h-24 flex flex-col justify-evenly	">
            <h3 className="text-center h-12 overflow-hidden	">{movie.title}</h3>
            <div className=" flex justify-evenly items-center">
              <Star />
              <p>{movie.vote_average.toFixed(2)}</p>
              <p>{movie.release_date.slice(0, 4)}</p>
            </div>
          </div>
        </div>
      </Link>
      <div
        className="relative bottom-10 left-16 pointer"
        onClick={() => onToggle(movie.id)}
      >
        {isActive ? <Favorite /> : <NotFavorite />}
      </div>
    </div>
  );
};

export default MovieCard;