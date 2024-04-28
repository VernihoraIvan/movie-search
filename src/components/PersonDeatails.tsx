import { Outlet, useNavigate, useParams } from "react-router-dom";
import ReturnButton from "./ReturnButton";
import { useEffect, useState } from "react";
import { fetchPersonDetails, fetchPersonDetailsById } from "@/api/connection";
import { Actor, PersonData } from "@/utilities/interfaces";
import { Loader } from "./Loader";
import { unknownPhoto } from "@/utilities/other";
import DetailsElement from "./DetailsElement";
import clsx from "clsx";
import { useTheme } from "@/context/Hooks";

const PersonDetails = () => {
  const [personDetails, setPersonDetails] = useState<PersonData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [person, setPerson] = useState<Actor | null>(null);
  const { personId } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isLight = theme === "light";
  console.log(personDetails);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchPersonDetails(personId as string);
        const result = await fetchPersonDetailsById(personId as string);
        setPerson(result);
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
    <div className="mt-headerM xl:pl-20 xl:w-contW pb-10 pt-6">
      <div className="mb-5 ml-10">
        <ReturnButton />
      </div>
      <div className="flex gap-16 xs:flex-col pl-10">
        <img
          className="w-cardW h-imgH object-cover "
          src={
            person?.profile_path
              ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
              : unknownPhoto
          }
          alt={`actor's name: ${person?.name}`}
        />
        <div className="max-w-9/12	 flex flex-col gap-10">
          {person && (
            <div className="flex gap-4 flex-col">
              <DetailsElement title={person.name} text={person.biography} />

              <DetailsElement
                title={"Popularity index:"}
                text={person.popularity.toFixed(2)}
              />
            </div>
          )}
          <div
            onClick={() => navigate("filmography", { replace: true })}
            className={clsx(
              "mr-4 rounded-md py-2 px-4 inline w-fit cursor-pointer",
              !isLight && "hover:text-white  bg-gray-800 hover:bg-gray-900",
              isLight &&
                "hover:text-hoverColorLight text-btnTextCol hover:text-colorLight bg-btnCol hover:bg-btnHoverCol"
            )}
          >
            Filmography
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default PersonDetails;
