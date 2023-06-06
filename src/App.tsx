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
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);

  return (
    <AppWrapp>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainContent />}>
          <Route path="/" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectScreen />} />
        </Route>
        <Route path="/auth/login" element={<AuthPage />} />
      </Routes>
      <AlertContainer />
      {/* <Loader active={isPreloaderActive} /> */}
    </AppWrapp>
  );
};
