import styled from "styled-components";

import Header from "./components/Header";
import { MainContent } from "./components/MainContent";

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
      <MainContent />
    </AppWrapp>
  );
};
