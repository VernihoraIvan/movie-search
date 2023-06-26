// import { useState, useEffect } from 'react';

const Trending = ({ movies }) => {
  console.log(movies);
  //   const [query, setQuery] = useState('');
  //   const [movies, setMovies] = useState('');

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     setQuery(event.target.value);
  //     if (query === '') {
  //       return;
  //     }
  //     if (query === event.target.value) {
  //       return;
  //     }
  //     onSubmit(query);
  //     setQuery('');
  //   };

  //   const handleChange = async event => {
  //     event.preventDefault();
  //     await setQuery(event.target.value);
  //   };

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
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default Trending;
