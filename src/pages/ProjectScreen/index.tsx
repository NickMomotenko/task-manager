import { FileAttachment } from "../../containers/FileAttachment";
import { MembersBlock } from "../../containers/MembersBlock";
import { Modal } from "../../containers/Modal";
import { ProjectCard } from "../../containers/ProjectCard";
import { ProjectChat } from "../../containers/ProjectChat";
import { ProjectProgress } from "../../containers/ProjectProgress";
import { ProjectStatus } from "../../containers/ProjectStatus";
import RecentActivity from "../../containers/RecentActivity";

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
  const taskCreator = useOpen(false);
  const weeklyProgress = useOpen();

  return (
    <ProjectScreenWrapp>
      <ProjectScreenRow>
        <ProjectScreenColumn>
          <ProjectScreenCard>
            <ProjectCard />
          </ProjectScreenCard>
          <ProjectScreenStatusTable>
            <ProjectStatus
              handleTaskCreatorActive={taskCreator.handleToggleClick}
              handleWeeklyProgressActive={weeklyProgress.handleToggleClick}
            />
          </ProjectScreenStatusTable>
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
      {taskCreator.isOpen && <Modal />}
    </ProjectScreenWrapp>
  );
};
