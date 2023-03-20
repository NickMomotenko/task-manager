import styled from "styled-components";

import { Row } from "../../components/Layout";
import { PaperWrapp } from "../../components/Paper/styled";

export const TaskBlockWrapp = styled.div``;

export const TaskBlockPaper = styled(PaperWrapp)``;

export const TaskBlockHeader = styled(Row)`
  margin-bottom: 12px;
`;

export const TaskBlockLabel = styled.div`
  font-weight: 600;
  font-size: 10px;
  color: #219653;

  background: rgba(36, 151, 86, 0.2);
  border-radius: 18px;
  display: inline-block;
  padding: 3.5px 14.5px;
`;

export const TaskBlockBottom = styled(Row)``;

export const TaskBlockUser = styled.div`
  margin-right: 10px;
`;

export const TaskBlockDateText = styled.span`
  color: #828282;
  font-size: 12px;
`;

export const TaskBlockDate = styled.div`
  cursor: pointer;
  position: relative;
  margin-right: 29px;

  &:hover {
    ${TaskBlockDateText} {
      color: #eb5757;
    }
  }
`;

export const TaskBlockButtons = styled.div``;

export const TaskBlockOptionButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TaskBlockOptionButtonIcon = styled.div`
  margin-right: 8px;
`;

export const TaskBlockBody = styled.div`
  margin-bottom: 12px;
`;

export const TaskBlockText = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #4f4f4f;
`;

export const TaskBlockOptionButtonText = styled.div`
  font-size: 12px;
  color: #828282;
`;
