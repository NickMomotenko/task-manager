import { useNavigate } from "react-router";

import { Row } from "../../components/Layout";
import { MultiAvatar } from "../../components/MultiAvatar";
import { Button } from "../../components/Button";

import { ProgressLine } from "../ProgressLine";
import { Accordion } from "../Accordion";

import { IProject } from "../../helpers/projects";

import {
  ProjectCardWrapp,
  ProjectCardBody,
  ProjectCardDescription,
  ProjectCardProgress,
  ProjectCardProgressLabel,
  ProjectCardProgressCounter,
  ProjectCardProgressLine,
  ProjectCardMultiAvatar,
  ProjectCardMultiAvatarText,
  ProjectCardInviteButton,
} from "./styled";

type ProjectCardProps = {
  as?: string | any;
  defaultCard?: boolean;
  project: IProject;
  handleInvitePeople?: () => void;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  as = "div",
  defaultCard = false,
  project,
  handleInvitePeople,
}) => {
  const { id, data, team } = project;

  const navigate = useNavigate();

  const handleNavigateById = () => {
    navigate(`/project/${id}`);
  };

  const handleOnClick = () => {
    if (!defaultCard) {
      return;
    }

    handleNavigateById();
  };

  const teamTextLabel = team?.length <= 3 ? "" : `+ ${team?.length - 3} people`;

  return (
    <ProjectCardWrapp as={as} onClick={handleOnClick} defaultCard={defaultCard}>
      <Accordion title={project?.data?.title} noAcco>
        <ProjectCardBody>
          <ProjectCardDescription>{data?.description}</ProjectCardDescription>
          <ProjectCardProgress>
            <Row gorizontalSpace="between">
              <ProjectCardProgressLabel>
                Project Progress
              </ProjectCardProgressLabel>
              <ProjectCardProgressCounter>
                {data?.progress}%
              </ProjectCardProgressCounter>
            </Row>
            <ProjectCardProgressLine>
              <ProgressLine
                initialValue={data?.progress}
                overLineColor="#46bd84"
                baseLineColor="#dee3ec"
              />
            </ProjectCardProgressLine>
          </ProjectCardProgress>
          <Row gorizontalSpace="between">
            <ProjectCardMultiAvatar>
              <MultiAvatar data={team} />
              <ProjectCardMultiAvatarText>
                {teamTextLabel}
              </ProjectCardMultiAvatarText>
            </ProjectCardMultiAvatar>
            {!defaultCard && (
              <ProjectCardInviteButton>
                <Button view="ghost" onClick={handleInvitePeople}>
                  Invite
                </Button>
              </ProjectCardInviteButton>
            )}
          </Row>
        </ProjectCardBody>
      </Accordion>
    </ProjectCardWrapp>
  );
};
