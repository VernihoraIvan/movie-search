import { fetchMovieDetails } from "@/api/connection";
import { MovieData } from "@/utilities/interfaces";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import ReturnButton from "./ReturnButton";
import DetailsElement from "./DetailsElement";
import AdditionalInfoSection from "./AdditionalInfoSection";
import { unknownImage } from "@/utilities/other";

const MovieDeatails = () => {
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieData | null>(null);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

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

  if (!movieDetails) {
    return null;
  }

  return (
    <div className="mt-headerM ml-28">
      <ReturnButton />
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
