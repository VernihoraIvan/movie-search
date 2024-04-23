import { fetchPersonDetails } from "@/api/connection";
import { PersonData } from "@/utilities/interfaces";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { unknownImage } from "@/utilities/other";

const Filmography = () => {
  const [personDetails, setPersonDetails] = useState<PersonData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { personId } = useParams();

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

  return (
    <div>
      <h2 className="text-2xl mt-10">Known for:</h2>
      <ul className="flex flex-wrap gap-x-8 gap-y-5 sm:justify-center">
        {personDetails &&
          personDetails.map((element) => (
            <li
              className="cursor-pointer flex  mt-10 flex-col max-w-36 max-h-72 overflow-hidden"
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
              <div className="h-full flex flex-col justify-between">
                <p className="h-6 text-white text-center overflow-y-hidden">
                  {element.title}
                </p>
                <p className="text-center">
                  {element.release_date?.slice(0, 4)}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Filmography;
