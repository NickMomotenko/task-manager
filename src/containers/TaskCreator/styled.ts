import styled from "styled-components";
import { Row } from "../../components/Layout";
import { PaperWrapp } from "../../components/Paper/styled";

export const TaskCreatorWrapp = styled.div`
  position: relative;
  display: inline-block;
`;

export const TaskCreatorPaper = styled(PaperWrapp)`
  min-width: 348px;
`;

export const TaskCreatorHead = styled(Row)`
  margin-bottom: 20px;
`;

export const TaskCreatorCrossButton = styled.button``;

export const TaskCreatorBody = styled.div``;

export const TaskCreatorTextarea = styled.div`
  margin-bottom: 16px;
`;

export const TaskCreatorOptions = styled.div`
  margin-bottom: 50px;
`;

export const TaskCreatorButton = styled.div`
  button {
    width: 100%;
    max-width: 100%;
  }
`;

export const TaskCreatorOptionsList = styled.ul`
  display: flex;
  width: 100%;
`;

export const TaskCreatorOptionsItem = styled.li<{
  isLastIcon: boolean;
}>`
  margin-left: ${({ isLastIcon }) => isLastIcon && "auto"};

  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TaskCreatorOptionsButton = styled.button``;
