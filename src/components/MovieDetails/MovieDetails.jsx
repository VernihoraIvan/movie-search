import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieDetails } from 'api/themoviedb';
import { useParams } from 'react-router-dom';

const MovieDeatails = () => {
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(moviesId);
        setMovieDetails(data);
        console.log(data);
      } catch (error) {
        console.log('error', error);
        setMovieDetails([]);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [moviesId]);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div>{movieDetails.id}</div>
      <div>
        <img src={movieDetails.poster_path} alt="" />
      </div>
      <h2>{movieDetails.title}</h2>
    </>
  );
};

export default MovieDeatails;
