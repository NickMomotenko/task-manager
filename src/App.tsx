import styled from "styled-components";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { MainContent } from "./components/MainContent";

import { Projects } from "./pages/Projects";
import { ProjectScreen } from "./pages/ProjectScreen";

import { AlertContainer } from "./containers/AlertContainer";

import { AppWrapp } from "./AppStyles";

export const App = () => {
  return (
    <AppWrapp>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />}>
          <Route path="/" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectScreen />} />
        </Route>
      </Routes>
      <AlertContainer />
    </AppWrapp>
  );
};
