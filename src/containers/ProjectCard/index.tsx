import { useRef, useState } from "react";

import { Icon } from "../../components/Icon";
import { Title } from "../../components/Title";
import { Row } from "../../components/Layout";
import { MultiAvatar } from "../../components/MultiAvatar";
import { DefaultButton } from "../../components/Button";
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
} from "./styled";
import { useClickOutside } from "../../hooks/useClickOutside";

interface ProjectCardProps {
  as?: string | any;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ as }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const optionRef = useRef<HTMLDivElement>(null);

  const handleOptionsActiveClick = () => setIsOptionsOpen(!isOptionsOpen);

  useClickOutside(optionRef, () => setIsOptionsOpen(false));

  return (
    <ProjectCardWrapp as={as}>
      <ProjectCardPaper>
        <ProjectCardHead btw>
          <ProjectCardHeadTitle>
            <Title text="Konsept design homepage" />
          </ProjectCardHeadTitle>
          <ProjectCardCrossButton onClick={handleOptionsActiveClick}>
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
            <Row btw>
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
          <Row btw>
            <ProjectCardMultiAvatar>
              <MultiAvatar />
              <ProjectCardMultiAvatarText>
                + 15 people
              </ProjectCardMultiAvatarText>
            </ProjectCardMultiAvatar>
            <ProjectCardInviteButton>
              <DefaultButton text="Invite" />
            </ProjectCardInviteButton>
          </Row>
        </ProjectCardBody>
      </ProjectCardPaper>
      <div ref={optionRef}>
        <Options initialState={isOptionsOpen} />
      </div>
    </ProjectCardWrapp>
  );
};
