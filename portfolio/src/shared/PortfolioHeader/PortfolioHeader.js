import React from "react";
import { NavLink } from "react-router-dom";

const PortfolioHeader = () => {
  return (
    <header className="flex flex-row px-20 py-40 bg-teal-900 text-teal-50">
      <nav>
        <ul>
          <li className="my-4 text-center hover:text-teal-300 hover:scale-110 transition ease-in-out delay-150 ">
            <NavLink to="/about" className="aria-[current=page]:text-teal-300">ABOUT</NavLink>
          </li>
          <li className="my-4 text-center hover:text-teal-300 hover:scale-110 transition ease-in-out delay-150">
            <NavLink to="/projects" className="aria-[current=page]:text-teal-300">PROJECTS</NavLink>
          </li>
          <li className="my-4 text-center hover:text-teal-300 hover:scale-110 transition ease-in-out delay-150 ">
            <NavLink to="/education" className="aria-[current=page]:text-teal-300">EDUCATION</NavLink>
          </li>
          <li className="my-4 text-center hover:text-teal-300 hover:scale-110 transition ease-in-out delay-150 ">
            <NavLink to="/skills" className="aria-[current=page]:text-teal-300">SKILLS</NavLink>
          </li>
          <li className="my-4 text-center hover:text-teal-300 hover:scale-110 transition ease-in-out delay-150 ">
            <NavLink to="/interests" className="aria-[current=page]:text-teal-300">INTERESTS</NavLink>
          </li>
          <li className="my-4 text-center focus:text-teal-300 hover:text-teal-300 hover:scale-110 transition ease-in-out delay-150">
            <NavLink to="/social" className="aria-[current=page]:text-teal-300">SOCIAL</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PortfolioHeader;
