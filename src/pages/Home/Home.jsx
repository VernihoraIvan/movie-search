import Trending from 'components/Trending/Trending';
import { useState, useEffect } from 'react';
import { fetchTrends } from 'api/themoviedb';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getMovies = async () => {
      try {
        const data = await fetchTrends();
        setMovies(data);
      } catch (error) {
        console.log('error', error);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Trending movies={movies} />
    </>
  );
};

export default Home;
