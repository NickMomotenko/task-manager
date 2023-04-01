import styled from "styled-components";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Projects } from "./pages/Projects";
import { ProjectScreen } from "./pages/ProjectScreen";

const AppWrapp = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

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
    </AppWrapp>
  );
};
