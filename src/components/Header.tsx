/// <reference types="vite-plugin-svgr/client" />

import { NavLink } from "react-router-dom";
// import Logo from "@/assets/icons/popcorn.svg?react";
import BurgerMenu from "./BurgerMenu";
const Header = () => {
  return (
    // <header className="flex items-center justify-around py-4 px-4 border-2 bg-darkbg rounded-lg text-white">
    <header className="top-0 w-full z-10 bg-bckgr  py-4 px-6 shadow-lg flex items-center justify-around fixed">
      {/* <NavLink className=" xs:mr-0 mr-60" to="/">
        <Logo className="h-14 w-14" />
      </NavLink> */}
      <BurgerMenu />
      <div className="flex gap-10 xxs:hidden">
        <NavLink to="/movies">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/tv">TV series</NavLink>
        <NavLink to="/wishlist">Wishlist</NavLink>
      </div>
    </header>
  );
};

export default Header;
