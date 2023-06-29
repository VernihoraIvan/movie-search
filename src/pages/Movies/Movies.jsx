import { Outlet } from 'react-router-dom';
import css from './Movies.module.css';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieByQuery } from 'api/themoviedb';

import { useState, useEffect } from 'react';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getSearchResult = async () => {
      try {
        const data = await fetchMovieByQuery(query);
        setQuery(data);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    };
    getSearchResult();
  }, []);

  const handleChange = event => {
    event.preventDefault();
    setQuery(event.target.value);
    if (query === '') {
      return;
    }
    if (query === event.target.value) {
      return;
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <form className={css.form}>
        <button className={css.button} type="submit">
          <span className={css.label}>Search</span>
        </button>
        <input
          className={css.input}
          // value={query}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </>
  );
};

export default Movies;
