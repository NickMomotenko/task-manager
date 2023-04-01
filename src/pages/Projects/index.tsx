import styled from "styled-components";

import { RootState } from "../../redux/store";

import { ProjectList } from "../../containers/ProjectList";
import { useSelector } from "react-redux";

export const ProjectsWrapp = styled.div``;

export const Projects = () => {
  const { projects } = useSelector((state: RootState) => state.projects);

  return (
    <ProjectsWrapp>
      <ProjectList data={projects} />
    </ProjectsWrapp>
  );
};
