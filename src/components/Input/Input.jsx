import fetchData from 'api/themoviedb';
import { useState, useEffect } from 'react';

const Input = ({ onSubmit, movies }) => {
  const [query, setQuery] = useState('');
  //   const [movies, setMovies] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(event.target.value);
    if (query === '') {
      return;
    }
    if (query === event.target.value) {
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  const handleChange = async event => {
    event.preventDefault();
    await setQuery(event.target.value);
  };

  // useEffect(() => {
  // async function fetchData() {
  //   // You can await here
  //   const response = await MyAPI.getData(someId);
  //   // ...
  // }
  // fetchData();

  //   setImageProfiles(prevState => [...prevState, ...data.hits]);

  //   useEffect(() => {
  //     const data = fetchData(query);
  //     setMovies(state => [...state, data.title]);
  //   }, [query]);

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        <span>Search</span>
      </button>
      <input
        value={query}
        onChange={handleChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />

      {/* {movies &&
        movies.map(movie => <div key={movie.title}>{movie.title}</div>)} */}
    </form>
  );
};

export default Input;
