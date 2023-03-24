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
  margin-bottom: 20px;
`;

export const TaskCreatorButton = styled.div`
  button {
    width: 100%;
    max-width: 100%;
    font-size: 13px;
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

export const TaskCreatorImplementor = styled(Row)`
  margin-bottom: 20px;
`;

export const TaskCreatorImplementorText = styled.span`
  font-weight: 300;
  font-size: 13px;
  color: #4f4f4f;
  margin-right: 10px;
`;

export const TaskCreatorImplementorTextIn = styled(TaskCreatorImplementorText)`
  margin-left: 10px;
`;

export const TaskCreatorImplementorContentWrapp = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  cursor: pointer;
  background: #f2f2f2;
  border: 1px dashed #bdbdbd;
  padding: 1px 0;
  min-width: 99px;
`;

export const TaskCreatorImplementorContentWrappUser = styled(
  TaskCreatorImplementorContentWrapp
)`
  background: #efefef;
  border-style: initial;
  padding-right: 8px;
`;

export const TaskCreatorImplementorTextProject = styled(
  TaskCreatorImplementorText
)`
  font-size: 13px;
  line-height: 20px;
  color: #828282;
  text-align: center;
  margin-right: 0;
`;

export const TaskCreatorImplementorTextName = styled(
  TaskCreatorImplementorText
)`
  font-weight: 500;
  font-size: 13px;
  color: #333333;
  margin-left: 9px;
`;

export const TaskCreatorImplementorCrossButton = styled.button``;
