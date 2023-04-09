import { IProject } from "../../helpers/projects";
import { ProjectCard } from "../ProjectCard";

import { ProjectListWrapp } from "./styled";

export const ProjectList: React.FC<{ data: IProject[] }> = ({ data }) => {
  return (
    <ProjectListWrapp as="ul">
      {data?.map((project: IProject) => (
        <ProjectCard key={project.id} as="li" project={project} defaultCard />
      ))}
    </ProjectListWrapp>
  );
};
