import styled from "styled-components";
import { PaperWrapp } from "../../components/Paper/styled";
import { Row } from "../../components/Layout";

export const ModalWrapp = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 4;

  background: rgb(239, 227, 227, 0.8);

  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalPaper = styled(PaperWrapp)`
  max-width: 45%;
  width: 100%;
  /* height: 50vh; */
`;

export const ModalHead = styled(Row)`
  margin-bottom: 20px;
`;
