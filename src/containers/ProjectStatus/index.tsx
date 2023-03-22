import { Icon } from "../../components/Icon";
import { Paper } from "../../components/Paper";
import { Title } from "../../components/Title";
import { Table } from "../../components/Table";

import lypaIcon from "../../assets/icons/lypa.svg";

import {
  ProjectStatusWrapp,
  ProjectStatusHeader,
  ProjectStatusBody,
  ProjectStatusTable,
  ProjectStatusPaper,
} from "./styled";

import { header, body } from "./mock";

export const ProjectStatus = () => {
  return (
    <ProjectStatusWrapp>
      <ProjectStatusPaper>
        <ProjectStatusHeader btw>
          <Title text="Project Status" />
          <Icon src={lypaIcon} alt="search icon" />
        </ProjectStatusHeader>
        <ProjectStatusBody>
          <ProjectStatusTable>
            <Table head={header} layoutRules={[60, 20, 20]} body={body} />
          </ProjectStatusTable>
        </ProjectStatusBody>
      </ProjectStatusPaper>
    </ProjectStatusWrapp>
  );
};
