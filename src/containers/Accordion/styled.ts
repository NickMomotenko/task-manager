import styled from "styled-components";

export const AccordionWrapp = styled.div``;

export const AccordionHeader = styled.div`
  cursor: pointer;
`;

export const AccordionBody = styled.div<{ isOpen: boolean; height: string }>`
  height: ${({ isOpen, height }) => (isOpen ? `${height}` : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  overflow: ${({ isOpen }) => (isOpen ? "" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: ${({ isOpen }) =>
    isOpen ? `opacity .4s .6s , height .4s` : `opacity .5s , height  .4s`};
`;
