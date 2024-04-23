import { useParams } from "react-router-dom";
import ReturnButton from "./ReturnButton";
import { useEffect, useState } from "react";
import { fetchPersonDetails, fetchPersonDetailsById } from "@/api/connection";
import { Actor, PersonData } from "@/utilities/interfaces";
import { Loader } from "./Loader";
import { unknownImage } from "@/utilities/other";
import DetailsElement from "./DetailsElement";

const PersonDetails = () => {
  const [personDetails, setPersonDetails] = useState<PersonData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [person, setPerson] = useState<Actor | null>(null);
  const { personId } = useParams();
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
    <div className="mt-headerM xl:pl-36 xl:w-contW pb-10">
      <ReturnButton />
      <div className="flex gap-16 xs:flex-col pl-10">
        <img
          className="w-cardW object-cover "
          src={
            person?.profile_path
              ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
              : unknownImage
          }
          alt={`actor's name: ${person?.name}`}
        />
        <div className="w-7/12 flex flex-col gap-10">
          {person && (
            <DetailsElement title={person?.name} text={person.biography} />
          )}
          {/* <DetailsElement
            title={movieDetails.title}
            text={`User score: ${(movieDetails.vote_average * 10).toFixed(
              2
            )} % `}
          /> */}
          {/* <DetailsElement title={"Genres"} text={"text"}>
          <ul>
            {movieDetails.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </DetailsElement> */}
          {/* <AdditionalInfoSection /> */}
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
