import { v4 as uuid } from "uuid";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";

import { ReplyTextarea } from "../../components/ReplyTextarea";

import { Accordion } from "../Accordion";
import { ProjectChatTeam } from "./ProjectChatTeam";
import { ProjectChatList } from "./ProjectChatList";

import { useDate } from "../../hooks/useDate";
import { useInput } from "../../hooks/useInput";

import {
  ProjectChatContent,
  ProjectChatTextareaBlock,
  ProjectChatBody,
} from "./styled";

import { IChat } from "./types";

import {
  ADD_MESSAGE,
  CHANGE_MESSAGE,
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
    tasks: any[];
  }[];
};

export const ProjectChat: React.FC<ProjectChatProps> = ({ chatData, team }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editableMessage, setEditableMessage] = useState<IChat | null>(null);

  const { authUser } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const { value, handleChange, clearValue, setValue } = useInput();
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

  const handleEditMessage = (id: number | string) => {
    setIsEdit((prev) => !prev);

    const message = chatData?.find((message) => message.id === id);

    if (message) {
      setValue(message.text);
      setEditableMessage(message);
    }
  };

  const handleChangeMessage = () => {
    if (editableMessage?.text === value) {
      clearValue();
      setIsEdit(false);
      setEditableMessage(null);
      return;
    }

    clearValue();
    setIsEdit(false);
    setEditableMessage(null);

    dispatch({
      type: CHANGE_MESSAGE,
      payload: { id: editableMessage?.id, text: value },
    });
  };

  const handleToggleLike = (id: number | string) => {
    dispatch({ type: SET_LIKE, payload: { messageId: id, user: authUser } });
  };

  return (
    <Accordion title="Project Chat" noAcco>
      <ProjectChatContent>
        <ProjectChatTeam team={team} />
        <ProjectChatBody>
          <ProjectChatList
            chatData={chatData}
            handleDeleteMessage={handleDeleteMessage}
            handleChangeMessage={handleEditMessage}
            handleToggleLike={handleToggleLike}
          />
        </ProjectChatBody>
        <ProjectChatTextareaBlock>
          <ReplyTextarea
            value={value}
            onChange={handleChange}
            placeholder="Reply or post an update"
            handleSend={isEdit ? handleChangeMessage : handleSend}
            submitButtonText={isEdit ? "Change" : "Send"}
          />
        </ProjectChatTextareaBlock>
      </ProjectChatContent>
    </Accordion>
  );
};
