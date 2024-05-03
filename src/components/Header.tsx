// / <reference types="vite-plugin-svgr/client" />
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { ModeToggle } from "./DropDownMenu";
import { useTheme } from "@/context/Hooks";
import clsx from "clsx";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  const isLight = theme === "light";
  return (
    <header
      className={clsx(
        "top-0 w-full z-10 xxs:items-start py-4 px-6 shadow-lg flex items-center justify-around fixed",
        isLight && "bg-bckgrLight text-colorLight",
        !isLight && "text-white bg-bckgrDark"
      )}
    >
      <div className="flex gap-10 xxs:hidden">
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/">Movies</NavLink>
        <NavLink to="/tv">TV series</NavLink>
        <NavLink to="/wishlist">Favorites</NavLink>
      </div>

      <BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ModeToggle menuOpen={menuOpen} />
    </header>
  );
};

export default Header;
