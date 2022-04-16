import React, { lazy } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "../Pages/Layouts/Layout";
import { LocalPaths } from "../Paths/LocalPath";
const ProjectsPage = lazy(() => import("../Pages/ProjectsPage/ProjectsPage"));
const AboutPage = lazy(() => import("../Pages/AboutPage/AboutPage"));
const TechStack = lazy(() => import("../Pages/TechsPage/TechsPage"));
const AchievementPage = lazy(
  () => import("../Pages/AchivementPage/AchievementPage")
);

const LinksPage = lazy(() => import("../Pages/LinksPage/LinksPage"));
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
