import styled from "styled-components";

import { Outlet } from "react-router-dom";

import { Container } from "../Container";

export const MainContentWrapp = styled.main`
  flex: 1;
  margin-top: 40px;
`;

export const MainContent = () => {
  return (
    <MainContentWrapp>
      <Container>
        <Outlet />
      </Container>
    </MainContentWrapp>
  );
};
