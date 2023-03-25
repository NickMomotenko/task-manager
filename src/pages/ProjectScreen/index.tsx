import { FileAttachment } from "../../containers/FileAttachment";
import { InviteBlock } from "../../containers/InviteBlock";
import { MembersBlock } from "../../containers/MembersBlock";
import { ProjectCard } from "../../containers/ProjectCard";
import { ProjectChat } from "../../containers/ProjectChat";
import { ProjectProgress } from "../../containers/ProjectProgress";
import { ProjectStatus } from "../../containers/ProjectStatus";
import { RecentActivity } from "../../containers/RecentActivity";
import { TaskCreator } from "../../containers/TaskCreator";

import { useOpen } from "../../hooks/useOpen";

import {
  ProjectScreenWrapp,
  ProjectScreenCard,
  ProjectScreenRow,
  ProjectScreenChat,
  ProjectScreenAttachments,
  ProjectScreenColumn,
  ProjectScreenMembers,
  ProjectScreenActivity,
  ProjectScreenStatusTable,
} from "./styled";

export const ProjectScreen = () => {
  const taskCreator = useOpen();
  const weeklyProgress = useOpen();

  return (
    <ProjectScreenWrapp>
      <ProjectScreenRow>
        <ProjectScreenColumn>
          <InviteBlock />
          <ProjectScreenCard>
            <ProjectCard />
          </ProjectScreenCard>
          <ProjectScreenStatusTable>
            <ProjectStatus
              handleTaskCreatorActive={taskCreator.handleToggleClick}
              handleWeeklyProgressActive={weeklyProgress.handleToggleClick}
            />
          </ProjectScreenStatusTable>
          {taskCreator.isOpen && (
            <TaskCreator
              handleTaskCreatorActive={taskCreator.handleToggleClick}
            />
          )}
          {weeklyProgress.isOpen && (
            <ProjectProgress
              handleWeeklyProgressActive={weeklyProgress.handleToggleClick}
            />
          )}
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
