import { useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../redux/store";

import { ProjectList } from "../../containers/ProjectList";

import { ProjectsWrapp } from "./styled";

export const Projects = () => {
  const { projects } = useSelector((state: RootState) => state.projects);

  return (
    <ProjectsWrapp>
      <ProjectList data={projects} />
    </ProjectsWrapp>
  );
};
