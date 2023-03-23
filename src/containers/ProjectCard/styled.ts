import styled from "styled-components";

import { Row } from "../../components/Layout";
import { Paper } from "../../components/Paper";

export const ProjectCardWrapp = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const ProjectCardPaper = styled(Paper)``;

export const ProjectCardHead = styled(Row)`
  margin-bottom: 20px;
`;

export const ProjectCardHeadTitle = styled.div``;

export const ProjectCardCrossButton = styled.button``;

export const ProjectCardBody = styled.div``;

export const ProjectCardDescription = styled.div`
  margin-bottom: 17px;
`;

export const ProjectCardProgress = styled.div`
  margin-bottom: 17px;
`;

export const ProjectCardProgressLabel = styled.div``;

export const ProjectCardProgressCounter = styled.span`
  font-size: 13px;
  color: #241c1c;
`;

export const ProjectCardProgressLine = styled.div``;

export const ProjectCardMultiAvatar = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectCardMultiAvatarText = styled.span`
  font-size: 13px;
  color: #925b5b;
  margin-left: 10px;
`;

export const ProjectCardInviteButton = styled.div``;
