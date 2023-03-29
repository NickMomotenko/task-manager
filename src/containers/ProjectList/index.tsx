import { ProjectCard } from "../ProjectCard";

import { ProjectListWrapp } from "./styled";

export const ProjectList = () => {
  return (
    <ProjectListWrapp as="ul">
      <ProjectCard as="li" />
      <ProjectCard as="li" />
      <ProjectCard as="li" />
    </ProjectListWrapp>
  );
};
