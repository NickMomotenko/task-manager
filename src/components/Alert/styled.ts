import styled from "styled-components";

export const AlertWrapp = styled.div<{ isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  width: 330px;
  min-height: 68px;
  padding: 16px 34px 16px 16px;

  background: "#e6d0d0";
  border-radius: 8px;

  position: relative;
  // bottom: 50px;
  // right: ${({ isActive }) => (isActive ? "30px" : "-50%")};

  transition: right 0.5s;
`;

export const AlertIcon = styled.div`
  display: inline-block;
  margin-right: 12px;
`;

export const AlertBlock = styled.div``;

export const AlertTitle = styled.div`
  font-weight: 600;
`;

export const AlertDesc = styled.div`
  font-size: 12px;
`;

export const AlertCrossButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
`;
