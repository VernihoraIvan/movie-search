import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { parseISO, format } from "date-fns";
import { MovieData } from "@/utilities/interfaces";
import { fetchMovieDetails } from "@/api/connection";
import { unknownImage } from "@/utilities/other";
import { Loader } from "./Loader";
import { getfavoriteMovie } from "@/redux/favorite/selectors";
import { toggleFavoriteMovies } from "@/redux/favorite/slice";
import { useTheme } from "@/context/Hooks";
import ReturnButton from "./ReturnButton";
import DetailsElement from "./DetailsElement";
import AdditionalInfoSection from "./AdditionalInfoSection";

const MovieDeatails = () => {
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const favoriteMovies = useSelector(getfavoriteMovie);
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    setIsLoading(true);
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(moviesId as string);
        setMovieDetails(data.results);
      } catch (error) {
        console.log("error", error);
        setMovieDetails(null);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [moviesId]);

  const onToggle = (movie: MovieData) => {
    dispatch(toggleFavoriteMovies(movie.id));
  };

  if (!movieDetails) {
    return null;
  }
  const formattedDate = format(
    parseISO(movieDetails?.release_date),
    "MMMM yyyy"
  );

  const isActive: boolean = favoriteMovies.includes(movieDetails?.id);

  if (isLoading) {
    return <Loader />;
  }

  if (!movieDetails) {
    return null;
  }

  return (
    <div className="mt-headerM xl:pl-20 xl:w-contW pb-10 pt-6">
      <div className="flex gap-4 mb-5 ml-10">
        <ReturnButton />
        <button
          className={clsx(
            "w-fit py-2 px-4 rounded",
            !isLight && "hover:text-white  bg-gray-800 hover:bg-gray-900",
            isLight &&
              "hover:text-hoverColorLight text-btnTextCol hover:text-colorLight bg-btnCol hover:bg-btnHoverCol"
          )}
          onClick={() => onToggle(movieDetails)}
        >
          {isActive ? "Remove from favorite" : "Add to favorite"}
        </button>
      </div>
      <div className="flex gap-16 xs:flex-col pl-10">
        <img
          className="w-cardW h-imgH object-cover "
          src={
            movieDetails?.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
              : unknownImage
          }
          alt={`movie's name: ${movieDetails?.title}`}
        />
        <div className="w-7/12 flex flex-col ">
          <DetailsElement
            title={movieDetails.title}
            release={formattedDate}
            text={`User score: ${
              isNaN(movieDetails.vote_average)
                ? "0"
                : (movieDetails.vote_average * 10).toFixed(2)
            } % `}
          />
          <DetailsElement title={"Overview"} text={movieDetails.overview} />
          <DetailsElement title={"Genres"} text={"text"}>
            <ul className="flex gap-5">
              {movieDetails?.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </DetailsElement>
          <AdditionalInfoSection />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDeatails;
