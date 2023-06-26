// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Trending = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`get-movie-details/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Trending;
