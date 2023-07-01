import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/themoviedb';
import { Loader } from 'components/Loader/Loader';
import css from './Cast.module.css';
import DetailsEl from 'components/DetailsEl/DetailsEl';
const unknownPhoto = `https://assets.mycast.io/actor_images/actor-an-unknown-actor-465215_large.jpg?1656098263`;

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { moviesId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  console.log(cast);
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

  if (cast.length === 0) {
    return (
      <div>
        <DetailsEl
          title={'Cast'}
          text={"We don't have any casts for this movie."}
        />
      </div>
    );
  }

  return (
    <ul className={css.list}>
      {cast.map(element => (
        <li className={css.list_item} key={element.credit_id}>
          <h3 className={css.actors_name}>{element.name}</h3>
          <img
            className={css.photo}
            src={
              element.profile_path
                ? `https://image.tmdb.org/t/p/w500/${element.profile_path}`
                : unknownPhoto
            }
            alt={element.name}
          />
          <p className={css.character}>{element.character}</p>
        </li>
      ))}
      ;
    </ul>
  );
};

export default Cast;
