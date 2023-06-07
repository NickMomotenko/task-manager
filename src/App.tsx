import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { MainContent } from "./components/MainContent";

import { Projects } from "./pages/Projects";
import { ProjectScreen } from "./pages/ProjectScreen";
import { AuthPage } from "./pages/AuthPage";

import { AlertContainer } from "./containers/AlertContainer";

import { AppWrapp } from "./AppStyles";
import { Loader } from "./components/Loader";

export const App = () => {
  return (
    <AppWrapp>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainContent />}>
          <Route path="/" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectScreen />} />
        </Route>
        <Route path="/auth" element={<AuthPage />}>
          <Route path="*" element={<AuthPage />} />
        </Route>
      </Routes>
      <AlertContainer />
      <Loader />
    </AppWrapp>
  );
};
