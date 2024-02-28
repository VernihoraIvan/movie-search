import { MovieData } from "@/utilities/interfaces";
import { unknownPhoto } from "@/utilities/other";
import { Link } from "react-router-dom";
import Bookmark from "@/assets/icons/bookmark_fav.svg?react";
import BookmarkIcon from "@/assets/icons/Bookmark_unfav.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { getfavoriteMovie } from "@/redux/favorite/selectors";
import { toggleFavoriteMovies } from "@/redux/favorite/slice";
export interface MovieCardProps {
  movie: MovieData;
  // isFavorite: boolean;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const favoriteMovies = useSelector(getfavoriteMovie);
  const dispatch = useDispatch();

  const onToggle = (id: number) => {
    dispatch(toggleFavoriteMovies(id));
  };

  const isActive = favoriteMovies.includes(movie.id);

  return (
    <div className="relative">
      <div
        className="relative left-2.5 top-10 cursor-pointer w-6 h-6"
        onClick={() => onToggle(movie.id)}
      >
        {isActive ? <Bookmark /> : <BookmarkIcon />}
      </div>
      <Link className="flex h-full" to={`/movies/${movie.id}`}>
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
              {/* <Star /> */}
              <p>{movie.vote_average.toFixed(2)}</p>
              <p>{movie.release_date.slice(0, 4)}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
