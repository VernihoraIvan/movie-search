import { fetchTVsDetails } from "@/api/connection";
import { TVData } from "@/utilities/interfaces";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import ReturnButton from "./ReturnButton";
import DetailsElement from "./DetailsElement";
import AdditionalInfoSection from "./AdditionalInfoSection";
import { unknownImage } from "@/utilities/other";
import { Loader } from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { getfavoriteTVs } from "@/redux/favorite/selectors";
import { useTheme } from "@/context/Hooks";
import clsx from "clsx";
import { toggleFavoriteTVs } from "@/redux/favorite/slice";

const TVsDetails = () => {
  const { tvId } = useParams();
  const [tvDetails, setTVDetails] = useState<TVData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const favoriteTVs = useSelector(getfavoriteTVs);
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const isLight = theme === "light";

  const onToggle = (tv: TVData) => {
    dispatch(toggleFavoriteTVs(tv.id));
  };

  const isActive = favoriteTVs.includes(tvDetails?.id);

  useEffect(() => {
    setIsLoading(true);
    const getMovieDetails = async () => {
      try {
        const data = await fetchTVsDetails(tvId as string);
        setTVDetails(data);
      } catch (error) {
        console.log("error", error);
        setTVDetails(null);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [tvId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!tvDetails) {
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
          onClick={() => onToggle(tvDetails)}
        >
          {isActive ? "Remove from favorite" : "Add to favorite"}
        </button>
      </div>
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
          <DetailsElement
            title={tvDetails.name}
            text={`User score: ${
              isNaN(tvDetails.vote_average)
                ? "0"
                : (tvDetails.vote_average * 10).toFixed(2)
            } % `}
          />
          <DetailsElement title={"Overview"} text={tvDetails.overview} />
          <AdditionalInfoSection />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default TVsDetails;
