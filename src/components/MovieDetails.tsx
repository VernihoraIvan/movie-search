import { fetchMovieDetails } from "@/api/connection";
import { MovieData } from "@/utilities/interfaces";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ReturnButton from "./ReturnButton";

const MovieDeatails = () => {
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieData[]>([]);
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
        setMovieDetails([]);
      } finally {
        // setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [moviesId]);

  console.log(movieDetails);
  const backLinkHref: string = location.state?.from ?? "/";

  return (
    <div>
      <ReturnButton to={backLinkHref} />
    </div>
  );
};

export default MovieDeatails;
