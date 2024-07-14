import React from "react";
import { NavLink } from "react-router-dom";

const PortfolioHeader = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
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
    </>
  );
};

export default PortfolioHeader;
