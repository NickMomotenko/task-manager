import styled from "styled-components";

import { Row } from "../../components/Layout";

export const ProjectScreenWrapp = styled.div``;

export const ProjectScreenCard = styled.div`
  margin-bottom: 20px;
`;

export const ProjectScreenRow = styled(Row)`
  align-items: flex-start;
`;

export const ProjectScreenChat = styled.div`
  margin-bottom: 20px;
  max-height: 70vh;
  overflow-x: auto;
`;

export const ProjectScreenAttachments = styled.div`
  margin-bottom: 20px;
`;

export const ProjectScreenColumn = styled.div`
  flex: 1;
  margin-right: 5%;

  &:last-child {
    margin-right: 0;
  }
`;

export const ProjectScreenMembers = styled.div`
  margin-top: 20px;
`;

export const ProjectScreenActivity = styled.div`
  margin-top: 20px;
`;

export const ProjectScreenStatusTable = styled.div`
  margin-bottom: 20px;
`;
