import styled from "styled-components";

type ISize = {
  h: string;
  w: string;
};

export const IconWrapp = styled.img<{ size?: ISize }>`
  display: inline-block;
  height: ${({ size }) => size?.h};
  width: ${({ size }) => size?.w};
`;
