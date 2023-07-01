import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
export const Header = () => {
  const handleActiveStyle = ({ isActive }) => {
    return { color: isActive ? 'red' : 'black', marginRight: 20 };
  };

  return (
    <div className={css.header}>
      <NavLink style={handleActiveStyle} to="/" end>
        Home
      </NavLink>
      <NavLink style={handleActiveStyle} to="/movies">
        Movies
      </NavLink>
    </div>
  );
};

export default Header;
