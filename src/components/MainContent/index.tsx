import { Outlet } from "react-router-dom";

import { Container } from "../Container";

import { MainContentWrapp } from "./styled";
import Header from "../Header";

export const MainContent = () => {
  return (
    <MainContentWrapp>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </MainContentWrapp>
  );
};
