import clsx from "clsx";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMovieCast } from "@/api/connection";
import { unknownPhoto } from "@/utilities/other";
import { useTheme } from "@/context/Hooks";
import { CastData } from "@/utilities/interfaces";
import { Loader } from "./Loader";
import DetailsElement from "./DetailsElement";

const Cast = () => {
  const [cast, setCast] = useState<CastData[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { moviesId } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isLight = theme === "light";

  const handlerCastOnClick = async (id: number) => {
    navigate(`/person/${id.toString()}`);
  };

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieCast(moviesId as string);
        if (!data) {
          setCast(null);
        } else {
          setCast(data);
        }
        return data;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieCast();
  }, [moviesId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!cast) {
    return (
      <div className="pl-10 mt-10">
        <DetailsElement
          title={"Cast"}
          text={"We don't have any casts for this movie."}
        />
      </div>
    );
  }

  return (
    <div className="mt-10 pl-10">
      <ul className="flex flex-wrap gap-x-8 gap-y-5 sm:justify-center">
        {cast.map((element) => (
          <li
            onClick={() => handlerCastOnClick(element.id)}
            className="rounded-md cursor-pointer flex gap-6 flex-col 
            max-w-36 max-h-72 overflow-hidden shadow-md hover:shadow-lg 
            transition-shadow duration-200"
            key={element.credit_id}
          >
            <img
              className="w-36 rounded-md object-cover h-52"
              src={
                element.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${element.profile_path}`
                  : unknownPhoto
              }
              alt={element.name}
            />
            <div className="text-center h-12 overflow-y-hidden">
              <h3
                className={clsx(
                  "h-6 text-sm  text-center overflow-y-hidden",
                  isLight && "text-secColorLight",
                  !isLight && "text-white"
                )}
              >
                {element.name}
              </h3>
              <p className="text-center text-sm">{element.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
