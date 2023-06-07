import styled from "styled-components";

export const MobileApproveWrapp = styled.div``;

export const MobileApproveRow = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const MobileApproveSubmit = styled.div`
  margin-top: 20px;

  button {
    max-width: 100%;
    width: 100%;
  }
`;

export const MobileApproveTimer = styled.div`
  margin-top: 10px;
`;

export const MobileApproveTimerText = styled.div`
  text-align: center;
`;

export const MobileApproveMessage = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
`;
