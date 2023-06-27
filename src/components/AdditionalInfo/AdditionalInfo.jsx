import { Link } from 'react-router-dom';

const AdditionalInfo = () => {
  return (
    <>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="/cast">Cast</Link>
        </li>
        <li>
          <Link to="/reviews">Review</Link>
        </li>
      </ul>
    </>
  );
};

export default AdditionalInfo;
