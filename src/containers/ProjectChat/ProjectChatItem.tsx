import styled from "styled-components";
import { Avatar } from "../../components/Avatar";
import { Icon } from "../../components/Icon";
import { Row } from "../../components/Layout";

import likedIcon from "../../assets/icons/like.svg";

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

export const ProjectChatItemInfo = styled.div``;

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

type ProjectChatItemProps = {
  id: number;
  user: {
    avatar: string;
    fullname: string;
  };
  data: {
    text: string;
    created_at: {
      date: string;
      time: string;
    };
    liked: number;
  };
  as: string;
};

export const ProjectChatItem: React.FC<ProjectChatItemProps> = ({
  user,
  data,
  as,
}) => {
  return (
    <ProjectChatItemWrapp as={as}>
      <ProjectChatItemTopRow>
        <ProjectChatItemAvatar>
          <Avatar
            url={user?.avatar}
            alt={`${user?.fullname} image`}
            size={30}
          />
        </ProjectChatItemAvatar>
        <ProjectChatItemInfo>
          <ProjectChatItemUserFullname>
            {user?.fullname}
          </ProjectChatItemUserFullname>
          <ProjectChatItemUserMessageText>
            {data?.text}
          </ProjectChatItemUserMessageText>
          <ProjectChatItemBottom>
            <ProjectChatItemDate>{data?.created_at?.time}</ProjectChatItemDate>
            <ProjectChatItemLiked>
              <ProjectChatItemLikedCounter>
                {data?.liked}
              </ProjectChatItemLikedCounter>
              <ProjectChatItemLikedIcon>
                <Icon src={likedIcon} alt="like icon" />
              </ProjectChatItemLikedIcon>
            </ProjectChatItemLiked>
          </ProjectChatItemBottom>
        </ProjectChatItemInfo>
      </ProjectChatItemTopRow>
    </ProjectChatItemWrapp>
  );
};
