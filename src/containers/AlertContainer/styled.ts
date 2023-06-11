import styled, { css } from "styled-components";

export const AlertContainerWrapp = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: 30%;
  position: fixed;
  right: -100%;
  bottom: 0;
  z-index: 1;
  opacity: 0;
  visibility: hidden;

  transition: opacity 0.5s, right 0.5s;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  padding: 15px 20px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      right: 0;
      opacity: 1;
      visibility: visible;
    `}
`;

export const AlertContainerItem = styled.div`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;
