import { fetchTVsDetails } from "@/api/connection";
import { TVData } from "@/utilities/interfaces";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import ReturnButton from "./ReturnButton";
import DetailsElement from "./DetailsElement";
import AdditionalInfoSection from "./AdditionalInfoSection";
import { unknownImage } from "@/utilities/other";
import { Loader } from "./Loader";

const TVsDetails = () => {
  const { moviesId } = useParams();
  const [tvDetails, setTVDetails] = useState<TVData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getMovieDetails = async () => {
      try {
        const data = await fetchTVsDetails(moviesId as string);
        setTVDetails(data);
      } catch (error) {
        console.log("error", error);
        setTVDetails(null);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [moviesId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!tvDetails) {
    return null;
  }

  return (
    <div className="mt-headerM xl:pl-20 xl:w-contW pb-10 pt-6">
      <ReturnButton />
      <div className="flex gap-16 xs:flex-col pl-10">
        <img
          className="w-cardW object-cover "
          src={
            tvDetails?.poster_path
              ? `https://image.tmdb.org/t/p/w500/${tvDetails.poster_path}`
              : unknownImage
          }
          alt={`tv's name: ${tvDetails?.name}`}
        />
        <div className="w-7/12 flex flex-col gap-10">
          <DetailsElement title={"Overview"} text={tvDetails.overview} />
          <DetailsElement
            title={tvDetails.name}
            text={`User score: ${(tvDetails.vote_average * 10).toFixed(2)} % `}
          />
          <AdditionalInfoSection />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default TVsDetails;
