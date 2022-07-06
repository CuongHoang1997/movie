import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="mb-14">
      <header
        className="header flex items-center justify-center text-white  
      gap-x-5 fixed top-0 z-10 w-full h-12 inset-0 text-xl "
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/tvseries"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          TV Series
        </NavLink>
      </header>
    </div>
  );
};

export default Header;
