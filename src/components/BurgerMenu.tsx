import { NavLink } from "react-router-dom";
import BurgerMenuIcon from "@/assets/icons/burgerMenu.svg?react";
import { useState } from "react";
import Logo from "@/assets/icons/popcorn.svg?react";

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="xxs:w-full">
      {!menuOpen && (
        <div className="flex justify-between">
          <NavLink className=" xs:mr-0 " to="/movies">
            <Logo className="h-14 w-14" />
          </NavLink>
          <BurgerMenuIcon
            onClick={handleMenu}
            className="h-10 w-10 xxs:block hidden animate-fade-in"
          />
        </div>
      )}
      {menuOpen && (
        <div
          onClick={handleMenu}
          className="  flex-col gap-10 xxs:flex hidden w-screen h-screen z-10s"
        >
          <NavLink to="/movies">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/tv">TV series</NavLink>
          <NavLink to="/wishlist">Wishlist</NavLink>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
