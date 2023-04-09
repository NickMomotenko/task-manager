import { useRef, useState } from "react";
import { useNavigate } from "react-router";

import { Icon } from "../../components/Icon";
import { Title } from "../../components/Title";
import { Row } from "../../components/Layout";
import { MultiAvatar } from "../../components/MultiAvatar";
import { Button } from "../../components/Button";
import { Options } from "../../components/Options";

import { ProgressLine } from "../ProgressLine";

import { useClickOutside } from "../../hooks/useClickOutside";
import { useOpen } from "../../hooks/useOpen";

import { IProject } from "../../helpers/projects";

import {
  ProjectCardWrapp,
  ProjectCardPaper,
  ProjectCardHead,
  ProjectCardHeadTitle,
  ProjectCardCrossButton,
  ProjectCardBody,
  ProjectCardDescription,
  ProjectCardProgress,
  ProjectCardProgressLabel,
  ProjectCardProgressCounter,
  ProjectCardProgressLine,
  ProjectCardMultiAvatar,
  ProjectCardMultiAvatarText,
  ProjectCardInviteButton,
  ProjectCardOptionBlock,
} from "./styled";

import optionIcon from "../../assets/icons/option-dots.svg";
import { Accordion } from "../Accordion";

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

  const { isOpen, setIsOpen, handleToggleClick } = useOpen();
  const navigate = useNavigate();

  const optionRef = useRef<HTMLDivElement>(null);

  const handleNavigateById = () => {
    navigate(`/project/${id}`);
  };

  const teamTextLabel = team?.length <= 3 ? "" : `+ ${team?.length - 3} people`;

  useClickOutside(optionRef, () => setIsOpen(false));

  return (
    <ProjectCardWrapp
      as={as}
      onClick={handleNavigateById}
      defaultCard={defaultCard}
    >
      <Accordion title={project?.data?.title} noAcco>
        {/* <ProjectCardHead gorizontalSpace="between">
          <ProjectCardCrossButton onClick={handleToggleClick}>
            <Icon src={optionIcon} alt="option icon" />
          </ProjectCardCrossButton>
        </ProjectCardHead> */}
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
        {/* <ProjectCardOptionBlock ref={optionRef} onClick={handleToggleClick}>
          <Options initialState={isOpen} />
        </ProjectCardOptionBlock> */}
      </Accordion>
    </ProjectCardWrapp>
  );
};
