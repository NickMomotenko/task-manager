import styled from "styled-components";

import { ProjectCard } from "../ProjectCard";

const ProjectListWrapp = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProjectList = () => {
  return (
    <ProjectListWrapp as="ul">
      <ProjectCard />
      {/* <ProjectCard /> */}
      {/* <ProjectCard /> */}
    </ProjectListWrapp>
  );
};
