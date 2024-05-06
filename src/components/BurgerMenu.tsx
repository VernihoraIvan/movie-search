/// <reference types="vite-plugin-svgr/client" />
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import BurgerMenuIcon from "@/assets/icons/burgerMenu.svg?react";
import CrossIcon from "@/assets/icons/close_icon.svg?react";
import { BurgerMenuProps } from "@/utilities/interfaces";
import { useTheme } from "@/context/Hooks";

const BurgerMenu = ({ menuOpen, setMenuOpen }: BurgerMenuProps) => {
  const { theme } = useTheme();

  const isLight = theme === "light";

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="xxs:w-full mr-5">
      {!menuOpen && (
        <div className="flex justify-between">
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
          <CrossIcon
            className={clsx(
              "absolute fill-white w-6 h-6 right-12",
              isLight && "fill-grey"
            )}
          />
          <NavLink
            className="border border-solid border-grey py-2 px-4 rounded-xl w-28"
            to="/"
          >
            Movies
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
            to="/favorite"
          >
            Favorites
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
