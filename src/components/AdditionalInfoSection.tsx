import { Link } from "react-router-dom";

const AdditionalInfoSection = () => {
  return (
    <div>
      <h2 className="text-white">Additional information</h2>
      <ul className="cursor-pointer mt-4">
        <li className="hover:text-white mr-4  rounded-md px-4 py-1 inline bg-gray-800 hover:bg-gray-900">
          <Link to="cast">Cast</Link>
        </li>
        <li className="hover:text-white rounded-md px-4 py-1 inline bg-gray-800 hover:bg-gray-900">
          <Link to="review">Review</Link>
        </li>
      </ul>
    </div>
  );
};
export default AdditionalInfoSection;
