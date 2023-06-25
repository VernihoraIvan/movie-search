import Input from 'components/Input/Input';
import Trending from 'components/Trending/Trending';
import { useState, useEffect } from 'react';
import fetchData from 'api/themoviedb';

const Home = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState('');

  useEffect(() => {
    const data = fetchData(query);
    setMovies(state => [...state, data.title]);
  }, [query]);

  const handleSubmit = input => {
    setQuery(input);
  };
  return <Input onSubmit={handleSubmit} movies={movies} />;
};

export default Home;
