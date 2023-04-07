import styled, { css } from "styled-components";

const baseSize = 100;
export const ProgressCircleWrapp = styled.div<{ size?: number }>`
  height: ${({ size }) => (size ? `${size}px` : `${baseSize}px`)};
  width: ${({ size }) => (size ? `${size}px` : `${baseSize}px`)};
  position: relative;
`;

export const ProgressCircleSvg = styled.svg`
  transform: rotate(270deg);
  height: 100%;
  width: 100%;
`;

export const ProgressCircleSvgLine = styled.circle`
  display: inline-block;
  height: 100%;
  fill: transparent;
  stroke-width: 6;
  width: 100%;

  stroke: #ecf3fe;
  transform: translate(5px, 5px);
`;

export const ProgressCircleSvgLineOver = styled(ProgressCircleSvgLine)<{
  value?: number;
  correctSize?: number;
  correctDasharray?: number;
}>`
  stroke: #46bd84;
  stroke-dasharray: ${(props) => `calc(${Math.PI} * 2 * ${props.correctSize})`};
  ${({ value, correctDasharray }) =>
    value &&
    css`
       {
        stroke-dashoffset: calc(
          ${correctDasharray} - (${correctDasharray} * ${value}) / 100
        );
      }
    `}

  stroke-linecap: round;
`;

export const ProgressCircleData = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ProgressCircleCounter = styled.div`
  font-weight: 900;
  font-size: 20px;
  color: #46bd84;
`;
