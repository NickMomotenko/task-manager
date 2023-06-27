import styled, { css } from "styled-components";
import { Row } from "../../components/Layout";

export const ProjectProgressWrapp = styled.div``;

export const ProjectProgressHead = styled(Row)`
  margin-bottom: 10px;
`;

export const ProjectProgressBody = styled.div``;

export const ProjectProgressDate = styled.div`
  font-size: 13px;
  color: rgb(189, 189, 189);
  margin-bottom: 20px;
`;

export const ProjectProgressCircleData = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #33ac72;
`;

export const ProjectProgressCircleCounter = styled.span`
  font-weight: 900;
  font-size: 20px;
`;

export const ProjectProgressCircleLable = styled.div`
  font-weight: 500;
  font-size: 12px;
  white-space: nowrap;
`;

export const ProjectProgressCircleSvg = styled.svg`
  transform: rotate(270deg);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const ProjectProgressCircleSvgLine = styled.circle`
  height: 100%;
  fill: transparent;
  stroke-width: 6;
  width: 100%;

  stroke: #ecf3fe;
  transform: translate(5px, 5px);
`;

export const ProjectProgressCircleSvgLineOver = styled(
  ProjectProgressCircleSvgLine
)<{ value?: number | 50 }>`
  stroke: #46bd84;
  stroke-dasharray: 440;
  ${({ value }) =>
    value && css`stroke-dashoffset:  calc(440 - (440 * ${value}) / 100)};`}

  stroke-linecap: round;
`;

export const ProjectProgressButtons = styled(Row)``;

export const ProjectProgressCrossButton = styled.button``;
