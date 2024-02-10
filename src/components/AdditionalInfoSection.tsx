import { Link } from "react-router-dom";

const AdditionalInfoSection = () => {
  return (
    <div>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="review">Review</Link>
        </li>
      </ul>
    </div>
  );
};
export default AdditionalInfoSection;
