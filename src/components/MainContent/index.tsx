import styled from "styled-components";
import { ProjectList } from "../../containers/ProjectList";

export const MainContentWrapp = styled.main`
  flex: 1;
`;

export const MainContent = () => {
  return (
    <MainContentWrapp>
      <ProjectList />
    </MainContentWrapp>
  );
};
