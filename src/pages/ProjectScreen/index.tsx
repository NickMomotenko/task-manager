import { useSelector } from "react-redux";

import { useParams } from "react-router";

import { RootState } from "../../redux/store";

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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_ACTIVE_PROJECT } from "../../redux/projects/types";
import { TaskCreator } from "../../containers/TaskCreator";

export const ProjectScreen = () => {
  const taskCreator = useOpen();
  const weeklyProgress = useOpen();

  const { projects, activeProject } = useSelector(
    (state: RootState) => state.projects
  );
  const params = useParams<{
    id: string;
  }>();

  const dispatch = useDispatch();

  useEffect(() => {
    const projectData = projects.find(({ id }) => id === Number(params.id));

    dispatch({ type: SET_ACTIVE_PROJECT, payload: projectData });
  }, [params?.id]);

  return (
    <ProjectScreenWrapp>
      <ProjectScreenRow>
        <ProjectScreenColumn>
          <ProjectScreenCard>
            <ProjectCard project={activeProject !== null && activeProject} />
          </ProjectScreenCard>
          <ProjectScreenStatusTable>
            <ProjectStatus
              handleTaskCreatorActive={taskCreator.handleToggleClick}
              handleWeeklyProgressActive={weeklyProgress.handleToggleClick}
            />
          </ProjectScreenStatusTable>
        </ProjectScreenColumn>
        <ProjectScreenColumn>
          <ProjectScreenChat>
            <ProjectChat
              chatData={activeProject?.chat}
              team={activeProject?.team}
            />
          </ProjectScreenChat>
          <ProjectScreenAttachments>
            <FileAttachment files={activeProject?.files} />
          </ProjectScreenAttachments>
          <ProjectScreenMembers>
            <MembersBlock members={activeProject?.team} />
          </ProjectScreenMembers>
          <ProjectScreenActivity>
            <RecentActivity />
          </ProjectScreenActivity>
        </ProjectScreenColumn>
      </ProjectScreenRow>
      {taskCreator.isOpen && (
        <Modal
          title="Create New Task"
          isOpen={taskCreator.isOpen}
          handleToggleActive={taskCreator.handleToggleClick}
        >
          <TaskCreator />
        </Modal>
      )}
      {weeklyProgress.isOpen && (
        <Modal
          title="Weekly progress"
          isOpen={weeklyProgress.isOpen}
          handleToggleActive={weeklyProgress.handleToggleClick}
        >
          <ProjectProgress />
        </Modal>
      )}
    </ProjectScreenWrapp>
  );
};
