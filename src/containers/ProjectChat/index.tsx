import { v4 as uuid } from "uuid";

import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/store";

import { Row } from "../../components/Layout";
import { MultiAvatar } from "../../components/MultiAvatar";
import { Title } from "../../components/Title";
import { ReplyTextarea } from "../../components/ReplyTextarea";

import { ProjectChatItem } from "./ProjectChatItem";

import { useTextarea } from "../../hooks/useTextarea";
import { useDate } from "../../hooks/useDate";

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

import { IChat } from "./types";

import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  SET_LIKE,
} from "../../redux/projects/types";

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
      payload: messageData,
    });

    clearValue();
  };

  const handleDeleteMessage = (id: number | string) => {
    dispatch({
      type: DELETE_MESSAGE,
      payload: id,
    });
  };

  const handleChangeMessage = () => {};

  const handleToggleLike = (id: number | string) => {
    dispatch({ type: SET_LIKE, payload: { messageId: id, user: authUser } });
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
              {chatData?.map((chat) => {
                const isMyMessage = authUser.id === chat?.user.id;

                return (
                  <ProjectChatItem
                    key={chat.id}
                    parentTag="li"
                    isMyMessage={isMyMessage}
                    onDelete={handleDeleteMessage}
                    onChangeMessage={handleChangeMessage}
                    toggleLike={handleToggleLike}
                    {...chat}
                  />
                );
              })}
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
