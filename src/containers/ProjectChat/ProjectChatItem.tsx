import { Avatar } from "../../components/Avatar";
import { Icon } from "../../components/Icon";
import { Button } from "../../components/Button";

import { IChat } from "./types";

import likedIcon from "../../assets/icons/like.svg";
import {
  ProjectChatItemAvatar,
  ProjectChatItemBottom,
  ProjectChatItemDate,
  ProjectChatItemInfo,
  ProjectChatItemLikedCounter,
  ProjectChatItemLikedIcon,
  ProjectChatItemTopRow,
  ProjectChatItemUserFullname,
  ProjectChatItemUserMessageText,
  ProjectChatItemWrapp,
  ProjectChatMyButton,
  ProjectChatChangedLabel,
} from "./styled";

type ProjectChatItemProps = IChat & {
  parentTag?: string | any;
  isMyMessage: boolean | string;
  onDelete?: (id: number | string) => void;
  toggleLike?: (id: number | string) => void;
  onChangeMessage?: (id: number | string) => void;
};

export const ProjectChatItem: React.FC<ProjectChatItemProps> = ({
  id,
  parentTag = "div",
  text,
  created_at,
  liked,
  user,
  changed,
  isMyMessage,
  onDelete,
  toggleLike,
  onChangeMessage,
}) => {
  return (
    <ProjectChatItemWrapp as={parentTag}>
      <ProjectChatItemTopRow>
        <ProjectChatItemAvatar>
          <Avatar url={user.avatar} alt={`${user.fullname} image`} size={30} />
        </ProjectChatItemAvatar>
        <ProjectChatItemInfo>
          <ProjectChatItemUserFullname>
            {user.fullname}
          </ProjectChatItemUserFullname>
          <ProjectChatItemUserMessageText>
            {text}
          </ProjectChatItemUserMessageText>
          <ProjectChatItemBottom>
            <ProjectChatItemDate>{created_at?.time}</ProjectChatItemDate>
            <Button view="ghost" onClick={() => toggleLike(id)}>
              <ProjectChatItemLikedCounter>
                {liked?.length}
              </ProjectChatItemLikedCounter>
              <ProjectChatItemLikedIcon>
                <Icon src={likedIcon} alt="like icon" />
              </ProjectChatItemLikedIcon>
            </Button>
            {changed && (
              <ProjectChatChangedLabel>{`(changed)`}</ProjectChatChangedLabel>
            )}

            {isMyMessage && (
              <ProjectChatMyButton>
                <Button
                  view="ghost"
                  size="s"
                  onClick={() => onChangeMessage(id)}
                >
                  change
                </Button>
                <Button view="ghost" size="s" onClick={() => onDelete(id)}>
                  delete
                </Button>
              </ProjectChatMyButton>
            )}
          </ProjectChatItemBottom>
        </ProjectChatItemInfo>
      </ProjectChatItemTopRow>
    </ProjectChatItemWrapp>
  );
};
