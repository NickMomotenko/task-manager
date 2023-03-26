import { useRef, useState } from "react";

import { Icon } from "../../components/Icon";
import { Title } from "../../components/Title";
import { Row } from "../../components/Layout";
import { MultiAvatar } from "../../components/MultiAvatar";
import { Button } from "../../components/Button";
import { Options } from "../../components/Options";

import { ProgressLine } from "../ProgressLine";

import optionIcon from "../../assets/icons/option-dots.svg";

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

import { useClickOutside } from "../../hooks/useClickOutside";
import { useOpen } from "../../hooks/useOpen";

type ProjectCardProps = {
  as?: string | any;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ as }) => {
  const { isOpen, setIsOpen, handleToggleClick } = useOpen();

  const optionRef = useRef<HTMLDivElement>(null);

  useClickOutside(optionRef, () => setIsOpen(false));

  return (
    <ProjectCardWrapp as={as}>
      <ProjectCardPaper>
        <ProjectCardHead verticalSpace="between">
          <ProjectCardHeadTitle>
            <Title text="Konsept design homepage" />
          </ProjectCardHeadTitle>
          <ProjectCardCrossButton onClick={handleToggleClick}>
            <Icon src={optionIcon} alt="option icon" />
          </ProjectCardCrossButton>
        </ProjectCardHead>
        <ProjectCardBody>
          <ProjectCardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            quas, praesentium repudiandae sed maxime velit. Natus mollitia
            distinctio atque laudantium debitis odio dolore excepturi! Porro
            asperiores tempore aut similique maiores?
          </ProjectCardDescription>
          <ProjectCardProgress>
            <Row verticalSpace="between">
              <ProjectCardProgressLabel>
                Project Progress
              </ProjectCardProgressLabel>
              <ProjectCardProgressCounter>33%</ProjectCardProgressCounter>
            </Row>
            <ProjectCardProgressLine>
              <ProgressLine
                initialValue={33}
                overLineColor="#46bd84"
                baseLineColor="#dee3ec"
              />
            </ProjectCardProgressLine>
          </ProjectCardProgress>
          <Row verticalSpace="between">
            <ProjectCardMultiAvatar>
              <MultiAvatar />
              <ProjectCardMultiAvatarText>
                + 15 people
              </ProjectCardMultiAvatarText>
            </ProjectCardMultiAvatar>
            <ProjectCardInviteButton>
              <Button view="ghost">Invite</Button>
            </ProjectCardInviteButton>
          </Row>
        </ProjectCardBody>
      </ProjectCardPaper>
      <ProjectCardOptionBlock ref={optionRef} onClick={handleToggleClick}>
        <Options initialState={isOpen} />
      </ProjectCardOptionBlock>
    </ProjectCardWrapp>
  );
};
