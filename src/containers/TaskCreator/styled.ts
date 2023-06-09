import styled from "styled-components";
import { Row } from "../../components/Layout";
import { WorkerWrapp } from "../Worker/styled";

export const TaskCreatorWrapp = styled.div`
  position: relative;
`;

export const TaskCreatorBody = styled.div``;

export const TaskCreatorTextareaWrapp = styled.div`
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

export const TaskCreatorImplementorWorkersWrapp = styled.div``;

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
  padding: 0 8px;
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

export const TaskCreatorLabelsWrapp = styled.div`
  margin-bottom: 20px;
`;

export const TaskCreatorImplementorWrapp = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

export const TaskCreatorImplementorBody = styled(Row)``;

export const TaskCreatorSelectWrapp = styled(Row)`
  margin-bottom: 20px;
`;

export const TaskCreatorSelectText = styled.span`
  margin-right: 10px;
`;

export const TaskCreatorSelectBlock = styled(Row)`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TaskCreatorSelectProject = styled(WorkerWrapp)``;
