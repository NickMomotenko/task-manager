import styled from "styled-components";
import { Avatar } from "../../components/Avatar";
import { Icon } from "../../components/Icon";
import { Row } from "../../components/Layout";

import likedIcon from "../../assets/icons/like.svg";
import { IChat } from "./types";
import { Button } from "../../components/Button";

export const ProjectChatItemWrapp = styled.div`
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProjectChatItemTopRow = styled(Row)`
  align-items: flex-start;
`;

export const ProjectChatItemAvatar = styled.div`
  margin-right: 13px;
`;

export const ProjectChatItemInfo = styled.div`
  flex: 1;
`;

export const ProjectChatItemUserFullname = styled.span`
  font-weight: 600;
  font-size: 13px;
  color: #333333;
  margin-bottom: 6px;
`;

export const ProjectChatItemUserMessageText = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: #4f4f4f;
  margin-bottom: 5px;
`;

export const ProjectChatItemBottom = styled(Row)``;

export const ProjectChatItemDate = styled.span`
  font-size: 10px;
  line-height: 15px;
  color: #828282;
  margin-right: 10px;
`;

export const ProjectChatItemLiked = styled.button`
  display: flex;
  align-items: center;
`;

export const ProjectChatItemLikedCounter = styled.span`
  font-size: 10px;
  color: #2f80ed;
  margin-right: 3px;
`;

export const ProjectChatItemLikedIcon = styled.div``;

export const ProjectChatDeleteButton = styled.div`
  margin-left: auto;
`;

type ProjectChatItemProps = IChat & {
  parentTag?: string;
  isMyMessage?: boolean;
  onDelete?: (id: number | string) => void;
  toggleLike?: (id: number | string) => void;
};

export const ProjectChatItem: React.FC<ProjectChatItemProps> = ({
  id,
  parentTag = "div",
  text,
  created_at,
  liked,
  user,
  isMyMessage,
  onDelete,
  toggleLike,
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
            {isMyMessage && (
              <ProjectChatDeleteButton>
                <Button view="ghost" size="s" onClick={() => onDelete(id)}>
                  delete
                </Button>
              </ProjectChatDeleteButton>
            )}
          </ProjectChatItemBottom>
        </ProjectChatItemInfo>
      </ProjectChatItemTopRow>
    </ProjectChatItemWrapp>
  );
};
