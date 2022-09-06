import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="mb-14">
      <header
        className="header flex items-center justify-center text-white  
      gap-x-20 fixed top-0 z-20 w-full h-[150px] inset-0 text-xl bg-gradient-to-b from-blue-500 to-transparent"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold menu-item" : "menu-item"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold menu-item" : "menu-item"
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/tvseries"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold menu-item" : "menu-item"
          }
        >
          TV Series
        </NavLink>
      </header>
    </div>
  );
};

export default Header;
