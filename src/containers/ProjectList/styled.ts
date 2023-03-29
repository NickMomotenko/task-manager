import styled from "styled-components";

import { ProjectCardWrapp } from "../ProjectCard/styled";

export const ProjectListWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: -20px;

  ${ProjectCardWrapp} {
    margin-right: 20px;
  }
`;
