/// <reference types="vite-plugin-svgr/client" />

import { NavLink } from "react-router-dom";
import Logo from "@/assets/icons/popcorn.svg?react";
const Header = () => {
  return (
    <header className="flex items-center py-4 px-4 border-2 bg-darkbg rounded-lg text-white">
      <NavLink className="mr-60" to="/">
        <Logo className="h-14 w-14" />
      </NavLink>
      <div className="flex gap-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Search</NavLink>
        <NavLink to="/tv">TV series</NavLink>
      </div>
    </header>
  );
};

export default Header;
