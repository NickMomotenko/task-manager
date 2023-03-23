import styled from "styled-components";

import { Row } from "../../components/Layout";

import { FileAttachment } from "../../containers/FileAttachment";
import { MembersBlock } from "../../containers/MembersBlock";
import { ProjectCard } from "../../containers/ProjectCard";
import { ProjectChat } from "../../containers/ProjectChat";
import { ProjectStatus } from "../../containers/ProjectStatus";
import { RecentActivity } from "../../containers/RecentActivity";

export const ProjectScreenWrapp = styled.div``;

export const ProjectScreenCard = styled.div`
  margin-bottom: 20px;
`;

export const ProjectScreenRow = styled(Row)`
  align-items: flex-start;
`;

export const ProjectScreenChat = styled.div`
  margin-bottom: 20px;
`;

export const ProjectScreenAttachments = styled.div`
  margin-bottom: 20px;
`;

export const ProjectScreenColumn = styled.div`
  flex: 1;
  margin-right: 5%;

  &:last-child {
    margin-right: 0;
  }
`;

export const ProjectScreenMembers = styled.div`
  margin-bottom: 20px;
`;

export const ProjectScreenActivity = styled.div``;

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
          <ProjectScreenChat>
            <ProjectChat />
          </ProjectScreenChat>
          <ProjectScreenAttachments>
            <FileAttachment />
          </ProjectScreenAttachments>
          <ProjectScreenMembers>
            <MembersBlock />
          </ProjectScreenMembers>
          <ProjectScreenActivity>
            <RecentActivity />
          </ProjectScreenActivity>
        </ProjectScreenColumn>
      </ProjectScreenRow>
    </ProjectScreenWrapp>
  );
};
