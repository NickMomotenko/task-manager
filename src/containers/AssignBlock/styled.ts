import styled from "styled-components";

export const AssignBlockWrapp = styled.div`
  border-radius: var(--button-radius);
  max-width: 60%;
  box-shadow: rgb(175, 184, 207) 0px 0px 8px;
  padding-bottom: 10px;

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5;
  background: #fff;
  margin-top: 5px;
`;

export const AssignBlockInput = styled.div`
  margin-bottom: 10px;
  padding: 10px 10px 0;
`;

export const AssignBlockList = styled.ul``;

export const AssignBlockItemWrapp = styled.li`
  padding: 10px;
  cursor: pointer;
  position: relative;
  transition: background var(--base-transition-s);

  &:before {
    content: "";
    display: block;
    height: 100%;
    width: 3px;
    background: transparent;
    transition: background var(--base-transition-s);

    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover {
    background: #f0f5fc;

    &::before {
      background: var(--button-bg);
    }
  }
`;

export const AssignBlockFullname = styled.span`
  margin: 0 15px 0 10px;
  font-size: 13px;
  color: #6f7174;
`;

export const AssignBlockTasksCounter = styled.span`
  color: #b8bac2;
  margin-left: auto;
`;
