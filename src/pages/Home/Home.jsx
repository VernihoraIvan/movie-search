import { Input } from 'components/Input/Input';
import Trending from 'components/Trending/Trending';
import { useState, useEffect } from 'react';
import { fetchTrends } from 'api/themoviedb';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [query, setQuery] = useState('');
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

  const handleSubmit = input => {
    setQuery(input);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Input onSubmit={handleSubmit} movies={movies} />;
      <Trending movies={movies} />
    </>
  );
};

export default Home;
