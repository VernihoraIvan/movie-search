import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";
import { fetchPersonDetails } from "@/api/connection";
import { PersonData } from "@/utilities/interfaces";
import { Loader } from "./Loader";
import { unknownImage } from "@/utilities/other";
import { useTheme } from "@/context/Hooks";

const Filmography = () => {
  const [personDetails, setPersonDetails] = useState<PersonData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { personId } = useParams();
  const { theme } = useTheme();
  const isLight = theme === "light";
  const navigate = useNavigate();

  const handlerCastOnClick = async (id: number) => {
    navigate(`/movies/${id.toString()}`);
  };

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        setIsLoading(true);
        const results = await fetchPersonDetails(personId as string);
        if (!results) {
          setPersonDetails(null);
        } else {
          setPersonDetails(results.cast);
        }
      } catch (error) {
        console.log("error", error);
        setPersonDetails(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPerson();
  }, [personId]);

  if (isLoading) {
    return <Loader />;
  }

  personDetails?.sort((a, b) => {
    return (
      new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    );
  });

  return (
    <div>
      <h2 className="text-2xl mt-10 ml-10">Known for:</h2>
      <ul className="pl-10 flex flex-wrap gap-x-8 gap-y-5 sm:justify-center">
        {personDetails &&
          personDetails.map((element) => (
            <li
              onClick={() => handlerCastOnClick(element.id)}
              className="rounded-md cursor-pointer flex  mt-10 flex-col max-w-36 max-h-cardW overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
              key={element.credit_id}
            >
              <img
                className="w-filmW rounded-md object-cover h-filmH"
                src={
                  element.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${element.poster_path}`
                    : unknownImage
                }
                alt={element.title}
              />
              <div className="h-12 flex flex-col justify-between mt-2">
                <h3
                  className={clsx(
                    "h-6 text-sm  text-center overflow-y-hidden",
                    isLight && "text-secColorLight",
                    !isLight && "text-white"
                  )}
                >
                  {element.title ? element.title : element.name}
                </h3>
                <p className="text-center text-sm">
                  {element.release_date && element.release_date.slice(0, 4)}
                  {element.first_air_date && element.first_air_date.slice(0, 4)}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Filmography;
