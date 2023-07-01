import { Loader } from 'components/Loader/Loader';
import { fetchMovieByQuery } from 'api/themoviedb';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';

import { useState, useEffect, useCallback } from 'react';
import Searchbar from 'components/SearchBar/SearchBar';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const handleSearchSubmit = useCallback(
    async query => {
      try {
        setIsLoading(true);
        const results = await fetchMovieByQuery(query);
        setSearchQuery(results);
        searchParams.set('query', query);
        navigate(`/movies?${searchParams.toString()}`);
        setIsLoading(false);
        console.log(searchParams.toString());
      } catch (error) {
        console.log('error', error);
        setSearchQuery([]);
      }
    },
    [navigate, searchParams]
  );

  useEffect(() => {
    const fetchMovies = async () => {
      if (!movieId) return;
      try {
        const results = await fetchMovieByQuery(movieId);
        setSearchQuery(results);
      } catch (error) {
        console.log('error', error);
        setSearchQuery([]);
      }
    };

    fetchMovies();
  }, [movieId]);

  useEffect(() => {
    const query = searchParams.get('query');
    console.log(query);
    if (query) {
      handleSearchSubmit(query);
    }
  }, [searchParams, handleSearchSubmit]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {/* <form className={css.form} onSubmit={handleSearchSubmit}>
        <button className={css.button} type="submit">
          <span className={css.label}>Search</span>
        </button>
        <input
          className={css.input}
          value={searchQuery}
          // onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form> */}
      <Searchbar onSubmit={handleSearchSubmit} />
      <MoviesList list={searchQuery} />
    </>
  );
};

export default Movies;
