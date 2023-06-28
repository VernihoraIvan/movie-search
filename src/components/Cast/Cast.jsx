import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/themoviedb';
import DetailsEl from 'components/DetailsEl/DetailsEl';
import { Loader } from 'components/Loader/Loader';

const unknownPhoto = `https://assets.mycast.io/actor_images/actor-an-unknown-actor-465215_large.jpg?1656098263`;
let photo = '';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const { moviesId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getMovieCast = async () => {
      try {
        const data = await fetchMovieCast(moviesId);
        setCast(data);
        return data;
      } catch (error) {
        window.alert(error);
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
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <ul>
      {cast.map(element => (
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
  );
};

export default Cast;
