import { fetchMovieDetails } from "@/api/connection";
import { MovieData } from "@/utilities/interfaces";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import ReturnButton from "./ReturnButton";
import DetailsElement from "./DetailsElement";
import AdditionalInfoSection from "./AdditionalInfoSection";

const unknownImage =
  "https://images.prewarcar.com/pics/r2w-1200x800-products/3240/Paris_movie_2008_503RB.jpg";

const MovieDeatails = () => {
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieData | null>(null);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    // setIsLoading(true);
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(moviesId as string);
        setMovieDetails(data);
      } catch (error) {
        console.log("error", error);
        setMovieDetails(null);
      } finally {
        // setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [moviesId]);

  const backLinkHref: string = location.state?.from ?? "/";

  if (!movieDetails) {
    return null;
  }

  return (
    <div>
      <ReturnButton to={backLinkHref} />
      <img
        src={
          movieDetails?.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : unknownImage
        }
        alt={`movie's name: ${movieDetails?.title}`}
      />
      <DetailsElement title={"Overview"} text={movieDetails.overview} />
      <DetailsElement
        title={movieDetails.title}
        text={`User score: ${movieDetails.vote_average * 10} % `}
      />
      {/* <DetailsElement title={"Genres"} text={"text"}>
        <ul>
          {movieDetails.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </DetailsElement> */}
      <AdditionalInfoSection />
      <Outlet />
    </div>
  );
};

export default MovieDeatails;
