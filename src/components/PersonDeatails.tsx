import { Outlet, useNavigate, useParams } from "react-router-dom";
import ReturnButton from "./ReturnButton";
import { useEffect, useState } from "react";
import { fetchPersonDetails, fetchPersonDetailsById } from "@/api/connection";
import { Actor, PersonData } from "@/utilities/interfaces";
import { Loader } from "./Loader";
import { unknownImage } from "@/utilities/other";
import DetailsElement from "./DetailsElement";

const PersonDetails = () => {
  const [personDetails, setPersonDetails] = useState<PersonData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [person, setPerson] = useState<Actor | null>(null);
  const { personId } = useParams();
  const navigate = useNavigate();
  console.log(personDetails);
  console.log(person);

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
      <ReturnButton />
      <div className="flex gap-16 xs:flex-col pl-10">
        <img
          className="w-cardW h-imgH object-cover "
          src={
            person?.profile_path
              ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
              : unknownImage
          }
          alt={`actor's name: ${person?.name}`}
        />
        <div className="max-w-9/12	 flex flex-col gap-10">
          {person && (
            <div className="flex gap-14 flex-col">
              <DetailsElement title={person.name} text={person.biography} />

              <DetailsElement
                title={"Popularity index:"}
                text={person.popularity.toFixed(2)}
              />
            </div>
          )}
          <div
            onClick={() => navigate("filmography", { replace: true })}
            className="w-fit cursor-pointer hover:text-white mr-4  rounded-md px-4 py-1 inline bg-gray-800 hover:bg-gray-900"
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
