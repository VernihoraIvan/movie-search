import { fetchMovieCast } from "@/api/connection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsElement from "./DetailsElement";
import { CastData } from "@/utilities/interfaces";

const unknownPhoto = `https://assets.mycast.io/actor_images/actor-an-unknown-actor-465215_large.jpg?1656098263`;

const Cast = () => {
  const [cast, setCast] = useState<CastData[]>([]);
  const { moviesId } = useParams();
  console.log(moviesId);
  useEffect(() => {
    // setIsLoading(true);
    const getMovieCast = async () => {
      try {
        const data = await fetchMovieCast(moviesId as string);
        console.log(data);
        setCast(data);
        return data;
      } catch (error) {
        window.alert(error);
      } finally {
        //   setIsLoading(false);
      }
    };
    getMovieCast();
  }, [moviesId]);

  if (!cast) {
    return (
      <div>
        <DetailsElement
          title={"Cast"}
          text={"We don't have any casts for this movie."}
        />
      </div>
    );
  }

  return (
    <>
      <ul>
        {cast.map((element) => (
          <li key={element.credit_id}>
            <h3>{element.name}</h3>
            <img
              src={
                element.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${element.profile_path}`
                  : unknownPhoto
              }
              alt={element.name}
            />
            <p>{element.character}</p>
          </li>
        ))}
        ;
      </ul>
      <p>cast vs</p>
    </>
  );
};

export default Cast;
