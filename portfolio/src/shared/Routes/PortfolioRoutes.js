import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../../pages/About/About";
import { Social } from "../../pages/Social/Social";
import { Skills } from "../../pages/Skills/Skills";
import { Projects } from "../../pages/Projects/Projects";
import { Interests } from "../../pages/Interests/Interests";
import { Education } from "../../pages/Education/Education";
import { NotFound } from "../../pages/ErrorPage/NotFound";

export const PortfolioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/interests" element={<Interests />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/social" element={<Social />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
