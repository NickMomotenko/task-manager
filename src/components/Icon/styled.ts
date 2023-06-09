import styled from "styled-components";

import { ReactSVG } from "react-svg";

type ISize = {
  h: string;
  w: string;
};

export const IconWrapp = styled(ReactSVG)<{
  size?: ISize;
  fill?: string;
}>`
  display: inline-block;
  height: ${({ size }) => size?.h};
  width: ${({ size }) => size?.w};

  svg {
    * {
      fill: ${({ fill }) => fill} !important;
      stroke: ${({ fill }) => fill} !important;
    }
  }
`;
