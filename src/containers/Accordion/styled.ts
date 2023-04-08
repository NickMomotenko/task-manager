import styled, { css } from "styled-components";
import { PaperWrapp } from "../../components/Paper/styled";

export const AccordionWrapp = styled.div``;

export const AccordionPaper = styled(PaperWrapp)`
  width: 100%;
  padding: 0;
`;

export const AccordionIcon = styled.div<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? `rotate(180deg)` : `rotate(0)`)};
  transition: transform 0.5s;
`;

export const AccordionHeader = styled.div<{ noAcco?: boolean }>`
  cursor: ${({ noAcco }) => !noAcco && "pointer"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const AccordionBody = styled.div<{
  isOpen: boolean;
  height: string;
  noAcco?: boolean;
}>`
  height: ${({ isOpen, height, noAcco }) =>
    noAcco ? "auto" : isOpen ? `${height}` : "0"};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  overflow: ${({ isOpen }) => (isOpen ? "" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: ${({ isOpen }) =>
    isOpen ? `opacity .4s .6s , height .4s` : `opacity .5s , height  .4s`};

  padding: 0 20px;
  padding-bottom: ${({ isOpen }) => (isOpen ? `20px` : 0)};
  box-sizing: content-box;
`;
