import styled from "styled-components";

import { ProjectCard } from "../ProjectCard";

import { ProjectCardWrapp } from "../ProjectCard/styled";

const ProjectListWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: -20px;

  ${ProjectCardWrapp} {
    margin-right: 20px;
  }
`;

export const ProjectList = () => {
  return (
    <ProjectListWrapp as="ul">
      <ProjectCard as="li" />
      <ProjectCard as="li" />
      <ProjectCard as="li" />
    </ProjectListWrapp>
  );
};
