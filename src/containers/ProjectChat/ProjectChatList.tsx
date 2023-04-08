import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import { ProjectChatItem } from "./ProjectChatItem";

import { ProjectChatBodyList } from "./styled";

import { IChat } from "./types";

type ProjectChatListProps = {
  chatData?: IChat[];
  handleDeleteMessage?: (id: number | string) => void;
  handleChangeMessage?: () => void;
  handleToggleLike?: (id: number | string) => void;
};

export const ProjectChatList: React.FC<ProjectChatListProps> = ({
  chatData,
  handleDeleteMessage,
  handleChangeMessage,
  handleToggleLike,
}) => {
  const { authUser } = useSelector((state: RootState) => state.auth);

  return (
    <>
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
    </>
  );
};
