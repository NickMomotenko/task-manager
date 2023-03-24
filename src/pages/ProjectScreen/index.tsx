import { useState } from "react";

import styled from "styled-components";

import { Row } from "../../components/Layout";

import { FileAttachment } from "../../containers/FileAttachment";
import { MembersBlock } from "../../containers/MembersBlock";
import { ProjectCard } from "../../containers/ProjectCard";
import { ProjectChat } from "../../containers/ProjectChat";
import { ProjectProgress } from "../../containers/ProjectProgress";
import { ProjectStatus } from "../../containers/ProjectStatus";
import { RecentActivity } from "../../containers/RecentActivity";
import { TaskCreator } from "../../containers/TaskCreator";

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

export const ProjectScreenStatusTable = styled.div`
  margin-bottom: 20px;
`;

export const ProjectScreen = () => {
  const [isTaskCreatorOpen, setIsTaskCreatorOpen] = useState<boolean>(false);
  const [isWeeklyProgressOpen, setIsWeeklyProgressOpen] =
    useState<boolean>(false);

  const handleTaskCreatorActive = () =>
    setIsTaskCreatorOpen(!isTaskCreatorOpen);

  const handleWeeklyProgressActive = () =>
    setIsWeeklyProgressOpen(!isWeeklyProgressOpen);

  return (
    <ProjectScreenWrapp>
      <ProjectScreenRow>
        <ProjectScreenColumn>
          <ProjectScreenCard>
            <ProjectCard />
          </ProjectScreenCard>
          <ProjectScreenStatusTable>
            <ProjectStatus
              handleTaskCreatorActive={handleTaskCreatorActive}
              handleWeeklyProgressActive={handleWeeklyProgressActive}
            />
          </ProjectScreenStatusTable>
          {isTaskCreatorOpen && <TaskCreator handleTaskCreatorActive={handleTaskCreatorActive} />}
          {isWeeklyProgressOpen && <ProjectProgress handleWeeklyProgressActive={handleWeeklyProgressActive} />}
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
