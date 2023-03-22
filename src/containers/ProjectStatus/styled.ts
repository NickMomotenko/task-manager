import styled from "styled-components";

import { Row } from "../../components/Layout";
import { PaperWrapp } from "../../components/Paper/styled";

export const ProjectStatusWrapp = styled.div``;

export const ProjectStatusPaper = styled(PaperWrapp)`
  min-width: 400px;
`;

export const ProjectStatusHeader = styled(Row)`
  margin-bottom: 20px;
`;

export const ProjectStatusBody = styled.div``;

export const ProjectStatusTable = styled.div``;

export const ProjectStatusTableHead = styled.div`
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 8px 0;

  display: flex;
`;

export const ProjectStatusTableColumn = styled(Row)``;

export const ProjectStatusTableHeadLabel = styled.div`
  font-size: 13px;
  color: #828282;
`;

export const ProjectStatusTableBody = styled.div``;

export const ProjectStatusTableBodyRow = styled(Row)``;
