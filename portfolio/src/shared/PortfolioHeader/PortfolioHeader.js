import React from "react";

import { NAVBAR_LINKS } from "../../common/navbarLinks";
import { Navbar } from "../../components/Navbar/Navbar";

const PortfolioHeader = () => {
  return (
    <header className="flex flex-row px-20 py-40 bg-teal-900 text-teal-50">
      <nav>
        <ul>
          {NAVBAR_LINKS.map((links)=>{
            return(<Navbar linkName={links.linkTo} linkTitle={links.title}/>)
          })}
        </ul>
      </nav>
    </header>
  );
};

export default PortfolioHeader;
