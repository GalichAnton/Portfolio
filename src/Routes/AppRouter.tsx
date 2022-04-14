import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "../Pages/Layouts/Layout";
import { LocalPaths } from "../Paths/LocalPath";
import ProjectsPage from "../Pages/ProjectsPage/ProjectsPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import TechStack from "../Pages/TechsPage/TechsPage";
import AchievementPage from "../Pages/AchivementPage/AchievementPage";
import LinksPage from "../Pages/LinksPage/LinksPage";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={LocalPaths.about} element={<AboutPage />} />
          <Route path={LocalPaths.projects} element={<ProjectsPage />} />
          <Route path={LocalPaths.techStack} element={<TechStack />} />
          <Route path={LocalPaths.achievements} element={<AchievementPage />} />
          <Route path={LocalPaths.interesting} element={<LinksPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
