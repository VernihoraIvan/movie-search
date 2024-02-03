import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/search">Search</NavLink>
    </header>
  );
};

export default Header;
