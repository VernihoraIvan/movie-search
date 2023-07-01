import { Link } from 'react-router-dom';
const MoviesList = ({ list }) => {
  return (
    <ul>
      {list &&
        list.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`}>{title}</Link>
          </li>
        ))}
      ;
    </ul>
  );
};

export default MoviesList;
