import React from "react";
import { NavLink } from "react-router-dom";

const PortfolioHeader = () => {
  return (
      <header className="flex flex-row border-2 border-rose-700 px-10 py-64 bg-teal-900 text-teal-50">
        <nav>
          <ul>
          <li>
              <img src="" alt="Profile Photo" />
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/education">Education</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/interests">Interests</NavLink>
            </li>
            <li>
              <NavLink to="/social">Social</NavLink>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default PortfolioHeader;
