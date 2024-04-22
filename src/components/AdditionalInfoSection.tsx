import { useNavigate } from "react-router-dom";

const AdditionalInfoSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-white">Additional information</h2>
      <ul className="cursor-pointer mt-4">
        <li
          onClick={() => navigate("cast", { replace: true })}
          className="hover:text-white mr-4  rounded-md px-4 py-1 inline bg-gray-800 hover:bg-gray-900"
        >
          Cast
        </li>
        <li
          onClick={() => navigate("review", { replace: true })}
          className="hover:text-white rounded-md px-4 py-1 inline bg-gray-800 hover:bg-gray-900"
        >
          Review
        </li>
      </ul>
    </div>
  );
};
export default AdditionalInfoSection;
