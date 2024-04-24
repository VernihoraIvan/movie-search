import { fetchPersonDetails } from "@/api/connection";
import { PersonData } from "@/utilities/interfaces";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { unknownImage } from "@/utilities/other";

const Filmography = () => {
  const [personDetails, setPersonDetails] = useState<PersonData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { personId } = useParams();
  const navigate = useNavigate();

  const handlerCastOnClick = async (id: number) => {
    navigate(`/movies/${id.toString()}`);
  };

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchPersonDetails(personId as string);
        setPersonDetails(cast);
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
      <h2 className="text-2xl mt-10">Known for:</h2>
      <ul className="pl-10 flex flex-wrap gap-x-8 gap-y-5 sm:justify-center">
        {personDetails &&
          personDetails.map((element) => (
            <li
              onClick={() => handlerCastOnClick(element.id)}
              className="cursor-pointer flex  mt-10 flex-col max-w-36 max-h-cardW overflow-hidden"
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
                <p className="h-6 text-sm text-white text-center overflow-y-hidden">
                  {element.title ? element.title : element.name}
                </p>
                {/* <p>{element.character ? element.character : ""}</p> */}
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
