import { MovieData } from "@/utilities/interfaces";
import { unknownImage } from "@/utilities/other";
import { Link } from "react-router-dom";
import { memo } from "react";
import Bookmark from "@/assets/icons/bookmark_fav.svg?react";
import BookmarkIcon from "@/assets/icons/Bookmark_unfav.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { getfavoriteMovie } from "@/redux/favorite/selectors";
import { toggleFavoriteMovies } from "@/redux/favorite/slice";

export interface MovieCardProps {
  movie: MovieData;
}

const MovieCard = memo(({ movie }: MovieCardProps) => {
  const favoriteMovies = useSelector(getfavoriteMovie);
  const dispatch = useDispatch();

  const onToggle = (movie: MovieData) => {
    dispatch(toggleFavoriteMovies(movie.id));
  };

  const isActive = favoriteMovies.includes(movie.id);

  return (
    <div className="relative h-full">
      <Link className="flex h-full" to={`/movies/${movie.id}`}>
        <div className="rounded-lg shadow-xl col-span-1 row-span-1">
          <img
            className="object-cover h-80"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : unknownImage
            }
            alt={movie.title}
          />
          <div className="px-2 py-2 flex flex-col justify-evenly">
            <h3 className="text-center h-12 overflow-hidden">{movie.title}</h3>
            <div className="flex justify-evenly items-center">
              <p>{movie.vote_average.toFixed(2)}</p>
              <p>{movie.release_date.slice(0, 4)}</p>
            </div>
          </div>
        </div>
      </Link>
      <div
        className="relative left-2.5 bottom-12 cursor-pointer w-6 h-6"
        onClick={() => onToggle(movie)}
      >
        {isActive ? <Bookmark /> : <BookmarkIcon />}
      </div>
    </div>
  );
});

export default MovieCard;
