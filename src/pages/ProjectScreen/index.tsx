import styled from "styled-components";
import { Row } from "../../components/Layout";
import { Paper } from "../../components/Paper";
import { FileAttachment } from "../../containers/FileAttachment";
import { ProjectCard } from "../../containers/ProjectCard";
import { ProjectChat } from "../../containers/ProjectChat";
import { ProjectStatus } from "../../containers/ProjectStatus";

export const ProjectScreenWrapp = styled.div``;

export const ProjectScreenCard = styled.div``;

// export const ProjectScreenContent = styled.div`
//   flex-basis: 50%;
// `;

export const ProjectScreenRow = styled(Row)`
  align-items: flex-start;
`;

export const ProjectScreenChat = styled.div``;

export const ProjectScreenAttachments = styled.div``;

export const ProjectScreenColumn = styled.div`
  flex: 1;
  margin-right: 5%;

  &:last-child {
    margin-right: 0;
  }
`;

export const ProjectScreen = () => {
  return (
    <ProjectScreenWrapp>
      <ProjectScreenRow>
        <ProjectScreenColumn>
          <ProjectScreenCard>
            <ProjectCard />
          </ProjectScreenCard>
          <ProjectStatus />
        </ProjectScreenColumn>
        <ProjectScreenColumn>
          <ProjectScreenAttachments>
            <FileAttachment />
          </ProjectScreenAttachments>
          <ProjectScreenChat>
            <ProjectChat />
          </ProjectScreenChat>
        </ProjectScreenColumn>
      </ProjectScreenRow>
    </ProjectScreenWrapp>
  );
};
