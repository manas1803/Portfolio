import React from "react";
import { NavLink } from "react-router-dom";


export const Navbar = ({ linkName, linkTitle }) => {
  return (
    <li className="my-4 text-center hover:text-teal-300 hover:scale-110 transition ease-in-out delay-150 ">
      <NavLink to={linkName} className="aria-[current=page]:text-teal-300">
        {linkTitle}
      </NavLink>
    </li>
  );
};
