import { Row } from "../../components/Layout";
import { MultiAvatar } from "../../components/MultiAvatar";

import { TData } from "../../components/MultiAvatar/types";

import {
  ProjectChatTeamList,
  ProjectChatTeamLabelText,
  ProjectChatTeamMultiAvatar,
} from "./styled";

type ProjectChatTeamProps = {
  team?: TData[];
};

export const ProjectChatTeam: React.FC<ProjectChatTeamProps> = ({ team }) => {
  return (
    <>
      <ProjectChatTeamList>
        <Row>
          <ProjectChatTeamLabelText>Team:</ProjectChatTeamLabelText>
          <ProjectChatTeamMultiAvatar>
            <MultiAvatar size={30} data={team} />
          </ProjectChatTeamMultiAvatar>
        </Row>
      </ProjectChatTeamList>
    </>
  );
};
