import { useSelector } from "react-redux";
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
import { RootState } from "../../redux/store";
import { useParams } from "react-router";

export const ProjectScreen = () => {
  const taskCreator = useOpen(false);
  const weeklyProgress = useOpen();

  const { projects } = useSelector((state: RootState) => state.projects);
  const params = useParams<{
    id: string;
  }>();

  const projectData = projects.find(({ id }) => id === Number(params.id));

  console.log(projectData);

  return (
    <ProjectScreenWrapp>
      <ProjectScreenRow>
        <ProjectScreenColumn>
          <ProjectScreenCard>
            <ProjectCard project={projectData} />
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
            <ProjectChat
              chatData={projectData?.chat}
              team={projectData?.team}
            />
          </ProjectScreenChat>
          <ProjectScreenAttachments>
            <FileAttachment files={projectData?.files} />
          </ProjectScreenAttachments>
          <ProjectScreenMembers>
            <MembersBlock members={projectData?.team} />
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
