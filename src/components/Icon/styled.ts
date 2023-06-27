import styled, { css } from "styled-components";

import { ReactSVG } from "react-svg";

type ISize = {
  h: string;
  w: string;
};

export const IconWrapp = styled(ReactSVG)<{
  size?: ISize;
  fill?: string;
  noFill?: boolean;
}>`
  display: inline-block;
  height: ${({ size }) => size?.h};
  width: ${({ size }) => size?.w};

  svg {
    ${({ noFill, fill }) =>
      !noFill &&
      css`
        * {
          fill: ${fill} !important;
          stroke: ${fill} !important;
        }
      `}
  }
`;
