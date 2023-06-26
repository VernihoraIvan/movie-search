import Input from 'components/Input/Input';
import Trending from 'components/Trending/Trending';
import { useState, useEffect } from 'react';
import { fetchTrends } from 'api/themoviedb';

const Home = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchTrends();
        setMovies(data);
      } catch (error) {
        console.log('error', error);
        setMovies([]);
      }
    };
    getMovies();
  }, []);

  const handleSubmit = input => {
    setQuery(input);
  };
  console.log(movies);
  return (
    <>
      <Input onSubmit={handleSubmit} movies={movies} />;
      <Trending movies={movies} />
    </>
  );
};

export default Home;
