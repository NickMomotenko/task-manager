import styled from "styled-components";

import { Row } from "../../components/Layout";
import { Paper } from "../../components/Paper";

export const ProjectChatWrapp = styled.div``;

export const ProjectChatPaper = styled(Paper)``;

export const ProjectChatTitle = styled.div`
  margin-bottom: 20px;
`;

export const ProjectChatContent = styled.div``;

export const ProjectChatTeamList = styled.div`
  margin-bottom: 15px;
`;

export const ProjectChatTeamLabelText = styled.div`
  font-weight: 700;
  margin-right: 10px;
`;

export const ProjectChatTeamMultiAvatar = styled.div``;

export const ProjectChatTextareaBlock = styled.div``;

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
