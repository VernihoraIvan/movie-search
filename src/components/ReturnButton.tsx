import { useNavigate } from "react-router-dom";

const ReturnButton = () => {
  const navigate = useNavigate();
  return (
    <div className="pl-10">
      <button
        className="my-5 bg-gray-800 hover:bg-gray-900 hover:text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
};

export default ReturnButton;
