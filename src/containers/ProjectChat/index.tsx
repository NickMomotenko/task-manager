import { v4 as uuid } from "uuid";

import { Row } from "../../components/Layout";
import { MultiAvatar } from "../../components/MultiAvatar";
import { Title } from "../../components/Title";

import { ProjectChatItem } from "./ProjectChatItem";

import {
  ProjectChatWrapp,
  ProjectChatTitle,
  ProjectChatContent,
  ProjectChatTeamList,
  ProjectChatTeamLabelText,
  ProjectChatTeamMultiAvatar,
  ProjectChatTextareaBlock,
  ProjectChatBody,
  ProjectChatBodyList,
  ProjectChatPaper,
} from "./styled";

import { useTextarea } from "../../hooks/useTextarea";

import { IChat } from "./types";
import { ReplyTextarea } from "../../components/ReplyTextarea";
import { useDate } from "../../hooks/useDate";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { ADD_MESSAGE } from "../../redux/projects/types";
import { useParams } from "react-router-dom";

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
  const { authUser } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const params = useParams<{ id: string }>();

  const { value, handleChange, clearValue } = useTextarea();

  const { hours, minutes, dayNumber, monthName, year, month } = useDate();

  const handleSend = () => {
    if (!value) return;

    const messageData = {
      id: uuid(),
      user: authUser,
      text: value,
      created_at: {
        date: `${dayNumber}.${month}.${year}`,
        time: `${hours}:${minutes}`,
      },
      liked: [],
    };

    dispatch({
      type: ADD_MESSAGE,
      payload: { messageData, projectId: Number(params?.id) },
    });

    clearValue();
  };

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
