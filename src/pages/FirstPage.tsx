import { NavLink } from "react-router-dom";

const FirstPage = () => {
  return (
    <NavLink
      className="mt-40 absolute top-1/3 left-45 bg-gray-800 hover:bg-gray-900 hover:text-white font-bold py-2 px-4 rounded"
      to="/movies"
    >
      Let's get started!
    </NavLink>
  );
};

export default FirstPage;
