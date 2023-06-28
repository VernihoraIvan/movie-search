// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Trending.module.css';

const Trending = ({ movies }) => {
  return (
    <ul className={css.trendingList}>
      {movies.map(({ id, title }) => (
        <li className={css.trendingEl} key={id}>
          <Link to={`movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Trending;
