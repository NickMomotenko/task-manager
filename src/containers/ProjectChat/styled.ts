import styled from "styled-components";

import { Row } from "../../components/Layout";

export const ProjectChatContent = styled.div`
  position: relative;
`;

export const ProjectChatTeamList = styled.div`
  margin-bottom: 15px;
  position: sticky;
  top: 10px;
  background: #fff;
  display: inline-block;
  border-radius: 20px;
  padding: 2px 5px;
`;

export const ProjectChatTeamLabelText = styled.div`
  font-weight: 700;
  margin-right: 10px;
`;

export const ProjectChatTeamMultiAvatar = styled.div``;

export const ProjectChatTextareaBlock = styled.div`
  position: sticky;
  bottom: 0;
  background: #fff;
  padding: 15px 0;
`;

export const ProjectChatTextareaBlockRow = styled(Row)`
  align-items: flex-start;
`;

export const ProjectChatTextareaAvatar = styled.div`
  margin-right: 12px;
`;

export const ProjectChatTextareaBottom = styled(Row)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectChatBody = styled.div`
  margin-bottom: 15px;
`;

export const ProjectChatBodyList = styled.ul``;

export const ProjectChatBodyItem = styled.li``;

export const ProjectChatTextarea = styled.div`
  width: 100%;
  position: relative;
`;

export const ProjectChatTextareaButton = styled.button`
  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }
`;

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

export const ProjectChatMyButton = styled.div`
  button {
    padding: 0;

    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }

  margin-left: auto;
`;

export const ProjectChatChangedLabel = styled.span`
  font-size: 10px;
  line-height: 15px;
  color: rgb(130, 130, 130);
  margin-left: 10px;
`;
