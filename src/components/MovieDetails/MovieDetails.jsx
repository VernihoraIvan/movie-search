import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieDetails } from 'api/themoviedb';
import { fetchMovieImage } from 'api/themoviedb';
import { useParams } from 'react-router-dom';
import DetailsEl from 'components/DetailsEl/DetailsEl';
import css from './MovieDetails.module.css';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import { Outlet } from 'react-router-dom';

const MovieDeatails = () => {
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState('');
  const [movieImage, setMovieImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(moviesId);
        const dataImage = await fetchMovieImage(data.id);
        setMovieDetails(data);
        setMovieImage(dataImage);
        console.log(data);
        console.log(dataImage);
      } catch (error) {
        console.log('error', error);
        setMovieDetails([]);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [moviesId]);

  console.log(movieImage);
  if (isLoading) {
    return <Loader />;
  }

  if (!movieDetails) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const genrsEls = (
    <ul className={css.ul}>
      {movieDetails.genres.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );

  return (
    <>
      <div className={css.container}>
        <img
          className={css.img}
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={`movie's name: ${movieDetails.title}`}
        />
        <div>
          <DetailsEl title={'Overview'} text={movieDetails.overview} />

          <DetailsEl
            title={movieDetails.title}
            text={`User score: ${movieDetails.vote_average * 10} % `}
          />
          <DetailsEl title={'Genres'} text={genrsEls} />
        </div>
      </div>
      <div>
        <AdditionalInfo />
        <Outlet />
      </div>
    </>
  );
};

export default MovieDeatails;