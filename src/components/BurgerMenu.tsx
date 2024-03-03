import { NavLink } from "react-router-dom";
import BurgerMenuIcon from "@/assets/icons/burgerMenu.svg?react";
import { useState } from "react";
import Logo from "@/assets/icons/popcorn.svg?react";
import CrossIcon from "@/assets/icons/close_icon.svg?react";
const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="xxs:w-full">
      {!menuOpen && (
        <div className="flex justify-between">
          <NavLink className=" xs:mr-0 " to="/">
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
          className="py-8 flex-col gap-10 xxs:flex hidden w-screen h-screen z-10s"
        >
          <CrossIcon className="absolute fill-white w-6 h-6 right-12" />
          <NavLink
            className="border border-solid border-grey py-2 px-4 rounded-xl w-28"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="border border-solid border-grey py-2 px-4 rounded-xl w-28"
            to="/search"
          >
            Search
          </NavLink>
          <NavLink
            className="border border-solid border-grey py-2 px-4 rounded-xl w-28"
            to="/tv"
          >
            TV series
          </NavLink>
          <NavLink
            className="border border-solid border-grey py-2 px-4 rounded-xl w-28"
            to="/wishlist"
          >
            Wishlist
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
