import styled from "styled-components";

export const LoginWrapp = styled.div``;

export const LoginInput = styled.div`
  margin-bottom: 20px;

  &::last-child {
    margin-bottom: 0;
  }
`;

export const LoginButton = styled.div`
  margin-top: 20px;

  button {
    width: 100%;
    max-width: 100%;
  }
`;

export const LoginOtherBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginCreateAccountBtn = styled.div`
  margin-right: 20px;

  &::after {
    content: "";
    display: inline-block;
    height: 20px;
    width: 1px;
    background: rgba(6, 6, 6, 0.19);
    vertical-align: middle;
    margin-left: 20px;
  }
`;
