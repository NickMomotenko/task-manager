import React from "react";
import { Icon } from "../../components/Icon";

import { Paper } from "../../components/Paper";
import { Title } from "../../components/Title";

import { ProjectStatusWrapp, ProjectStatusHeader ,ProjectStatusBody } from "./styled";

export const ProjectStatus = () => {
  return (
    <ProjectStatusWrapp>
      <Paper>
        <ProjectStatusHeader btw>
          <Title text="Project Status" />
          {/* <Icon src={} />   */}
        </ProjectStatusHeader>
        <ProjectStatusBody>

        </ProjectStatusBody>
      </Paper>
    </ProjectStatusWrapp>
  );
};
