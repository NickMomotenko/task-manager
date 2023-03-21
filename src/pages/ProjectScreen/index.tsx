import styled from "styled-components";
import { Row } from "../../components/Layout";
import { Paper } from "../../components/Paper";
import { ProjectCard } from "../../containers/ProjectCard";
import { ProjectChat } from "../../containers/ProjectChat";

export const ProjectScreenWrapp = styled.div``;

export const ProjectScreenCard = styled.div``;

export const ProjectScreenContent = styled(Paper)``;

export const ProjectScreen = () => {
  return (
    <ProjectScreenWrapp>
      <Row>
        <ProjectScreenCard>
          <ProjectCard />
        </ProjectScreenCard>
        <ProjectScreenContent>
          <ProjectChat />
        </ProjectScreenContent>
      </Row>
    </ProjectScreenWrapp>
  );
};
