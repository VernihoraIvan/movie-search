// / <reference types="vite-plugin-svgr/client" />
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { ModeToggle } from "./DropDownMenu";
import { useTheme } from "@/context/Hooks";
import clsx from "clsx";

const Header = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  return (
    <header
      className={clsx(
        "top-0 w-full z-10   py-4 px-6 shadow-lg flex items-center justify-around fixed",
        isLight && "bg-bckgrLight text-colorLight",
        !isLight && "text-white bg-bckgrDark"
      )}
    >
      <BurgerMenu />
      <div className="flex gap-10 xxs:hidden">
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/">Movies</NavLink>
        <NavLink to="/tv">TV series</NavLink>
        <NavLink to="/wishlist">Favorites</NavLink>
      </div>
      <ModeToggle />
    </header>
  );
};

export default Header;
