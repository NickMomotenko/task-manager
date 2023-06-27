import styled from "styled-components";
import { Row } from "../Layout";
import { ButtonWrapp } from "../Button/styled";

export const ReplyTextareaWrapp = styled.div`
  display: flex;
  position: relative;
`;

export const ReplyTextareaBody = styled.div`
  flex: 1;
`;

export const ReplyTextareaUser = styled.div`
  margin-right: 12px;
`;

export const ReplyTextareaBar = styled(Row)`
  justify-content: flex-end;
`;

export const ReplyTextareaButtons = styled(Row)`
  margin-right: 20px;

  ${ButtonWrapp} {
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ReplyTextareaEmoji = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
