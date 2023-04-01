import { Row } from "../../components/Layout";
import { MultiAvatar } from "../../components/MultiAvatar";
import { Title } from "../../components/Title";
import { Textarea } from "../../components/Textarea";
import { Icon } from "../../components/Icon";

import { ProjectChatItem } from "./ProjectChatItem";

import {
  ProjectChatWrapp,
  ProjectChatTitle,
  ProjectChatContent,
  ProjectChatTeamList,
  ProjectChatTeamLabelText,
  ProjectChatTeamMultiAvatar,
  ProjectChatTextareaBlock,
  ProjectChatTextareaBlockRow,
  ProjectChatTextareaAvatar,
  ProjectChatTextareaBottom,
  ProjectChatBody,
  ProjectChatBodyList,
  ProjectChatTextarea,
  ProjectChatTextareaButton,
  ProjectChatPaper,
} from "./styled";

import { useTextarea } from "../../hooks/useTextarea";

import { IChat } from "./types";
import { ReplyTextarea } from "../../components/ReplyTextarea";

type ProjectChatProps = {
  chatData?: IChat[];
  team?: {
    id: string;
    fullname: string;
    avatar: string;
    position: string;
    tasks: never[];
  }[];
};

export const ProjectChat: React.FC<ProjectChatProps> = ({ chatData, team }) => {
  const { value, handleChange } = useTextarea();

  const handleSend = () => {};

  return (
    <ProjectChatWrapp>
      <ProjectChatPaper>
        <ProjectChatTitle>
          <Title text="Project Chat" />
        </ProjectChatTitle>
        <ProjectChatContent>
          <ProjectChatTeamList>
            <Row>
              <ProjectChatTeamLabelText>Team:</ProjectChatTeamLabelText>
              <ProjectChatTeamMultiAvatar>
                <MultiAvatar size={30} data={team} />
              </ProjectChatTeamMultiAvatar>
            </Row>
          </ProjectChatTeamList>
          <ProjectChatBody>
            <ProjectChatBodyList>
              {chatData?.map((chat) => (
                <ProjectChatItem key={chat.id} as="li" {...chat} />
              ))}
            </ProjectChatBodyList>
          </ProjectChatBody>
          <ProjectChatTextareaBlock>
            <ReplyTextarea
              value={value}
              onChange={handleChange}
              placeholder="Reply or post an update"
              handleSend={handleSend}
            />
          </ProjectChatTextareaBlock>
        </ProjectChatContent>
      </ProjectChatPaper>
    </ProjectChatWrapp>
  );
};
