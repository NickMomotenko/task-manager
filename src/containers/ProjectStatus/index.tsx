import { useRef, useState } from "react";

import { Icon } from "../../components/Icon";
import { Title } from "../../components/Title";
import { Table } from "../../components/Table";
import { Options } from "../../components/Options";

import { useClickOutside } from "../../hooks/useClickOutside";

import lypaIcon from "../../assets/icons/lypa.svg";
import optionIcon from "../../assets/icons/option-dots.svg";

import {
  ProjectStatusWrapp,
  ProjectStatusHeader,
  ProjectStatusTableHeadButtons,
  ProjectStatusBody,
  ProjectStatusTable,
  ProjectStatusPaper,
  ProjectStatusSearchButton,
  ProjectStatusOptionButton,
  ProjectStatusOptionBlock,
} from "./styled";

import { header, body } from "./data";

type ProjectStatusProps = {
  handleTaskCreatorActive: () => void;
  handleWeeklyProgressActive: () => void;
};

export const ProjectStatus: React.FC<ProjectStatusProps> = ({
  handleTaskCreatorActive,
  handleWeeklyProgressActive,
}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);

  const optionRef = useRef<HTMLDivElement>(null);

  const handleOptionsActiveClick = () => setIsOptionsOpen(!isOptionsOpen);

  useClickOutside(optionRef, () => setIsOptionsOpen(false));

  const optionList = [
    { id: 1, title: "Add new task", onClick: handleTaskCreatorActive },
    { id: 2, title: "Project progress", onClick: handleWeeklyProgressActive },
  ];

  return (
    <ProjectStatusWrapp>
      <ProjectStatusPaper>
        <ProjectStatusHeader verticalSpace="between">
          <Title text="Project Status" />
          <ProjectStatusTableHeadButtons>
            <ProjectStatusSearchButton>
              <Icon src={lypaIcon} alt="search icon" />
            </ProjectStatusSearchButton>
            <ProjectStatusOptionButton onClick={handleOptionsActiveClick}>
              <Icon src={optionIcon} alt="option icon" />
            </ProjectStatusOptionButton>
          </ProjectStatusTableHeadButtons>
        </ProjectStatusHeader>
        <ProjectStatusBody>
          <ProjectStatusTable>
            <Table head={header} layoutRules={[60, 20, 20]} body={body} />
          </ProjectStatusTable>
        </ProjectStatusBody>
      </ProjectStatusPaper>
      <ProjectStatusOptionBlock
        ref={optionRef}
        onClick={handleOptionsActiveClick}
      >
        <Options initialState={isOptionsOpen} list={optionList} />
      </ProjectStatusOptionBlock>
    </ProjectStatusWrapp>
  );
};
