import styled from "styled-components";

export const ProgressLineWrapp = styled.div``;

export const ProgressLineGlobal = styled.div<{ baseLineColor?: string }>`
  height: 4px;
  width: 130px;
  display: inline-block;
  border-radius: 2px;

  background: ${({ baseLineColor }) =>
    baseLineColor ? baseLineColor : "#fbdddd"};

  position: relative;
  overflow: hidden;
`;

export const ProgressLineOver = styled.div<{
  value?: number | 0;
  overLineColor?: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ value }) => (value ? `${value}%` : "30%")};
  background: ${({ overLineColor }) =>
    overLineColor ? overLineColor : "#eb5757"};
  border-radius: 2px;
`;
