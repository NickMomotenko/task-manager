import styled from "styled-components";
import { Row } from "../Layout";
import { ButtonWrapp } from "../Button/styled";

export const ReplyTextareaWrapp = styled.div`
  display: flex;
`;

export const ReplyTextareaBody = styled.div`
  flex: 1;
`;

export const ReplyTextareaUser = styled.div`
  margin-right: 12px;
`;

export const ReplyTextareaBar = styled(Row)``;

export const ReplyTextareaButtons = styled(Row)`
  ${ButtonWrapp} {
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
