import styled from "styled-components";

export const OptionsWrapp = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 2;
  background: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 10px;
  box-shadow: rgb(175, 184, 207) 0px 0px 8px;
  width: 40%;

  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
`;

export const OptionsList = styled.ul``;

export const OptionsItem = styled.li`
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const OptionsButton = styled.button`
  width: 100%;
  text-align: left;
`;
