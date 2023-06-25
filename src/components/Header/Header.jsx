import { NavLink } from 'react-router-dom';

export const Header = () => {
  const handleActiveStyle = ({ isActive }) => {
    return { color: isActive ? 'red' : 'black', marginRight: 20 };
  };

  return (
    <>
      <NavLink style={handleActiveStyle} to="/" end>
        Home
      </NavLink>
      <NavLink style={handleActiveStyle} to="/movies">
        Movies
      </NavLink>
    </>
  );
};

export default Header;
