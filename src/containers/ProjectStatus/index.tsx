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
} from "./styled";

import { header, body } from "./mock";

export const ProjectStatus: React.FC = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);

  const optionRef = useRef<HTMLDivElement>(null);

  const handleOptionsActiveClick = () => setIsOptionsOpen(!isOptionsOpen);

  useClickOutside(optionRef, () => setIsOptionsOpen(false));

  const optionList = [{ id: 1, title: "Add new task" }];

  return (
    <ProjectStatusWrapp>
      <ProjectStatusPaper>
        <ProjectStatusHeader btw>
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
      <div ref={optionRef}>
        <Options initialState={isOptionsOpen} list={optionList} />
      </div>
    </ProjectStatusWrapp>
  );
};
