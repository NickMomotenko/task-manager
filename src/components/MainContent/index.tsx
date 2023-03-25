import { Outlet } from "react-router-dom";

import { Container } from "../Container";

import { MainContentWrapp } from "./styled";

export const MainContent = () => {
  return (
    <MainContentWrapp>
      <Container>
        <Outlet />
      </Container>
    </MainContentWrapp>
  );
};
