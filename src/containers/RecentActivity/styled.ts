import styled, { css } from "styled-components";

import { Row } from "../../components/Layout";
import { PaperWrapp } from "../../components/Paper/styled";

export const RecentActivityWrapp = styled.div``;

export const RecentActivityPaper = styled(PaperWrapp)`
  width: 100%;
`;

export const RecentActivityHead = styled(Row)`
  margin-bottom: 20px;
`;

export const RecentActivityBody = styled.div``;

export const RecentActivityList = styled.ul``;

export const RecentActivityItemWrapp = styled.li``;

export const RecentActivityItemIcon = styled.div<{ type: string }>`
  --size: 32px;
  --uploaded-bg: #fba63c;
  --change-bg: #7784ee;
  --comment-bg: #5dc983;

  height: var(--size);
  width: var(--size);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ type }) =>
    type === "uploaded" &&
    css`
      background: var(--uploaded-bg);
    `}

  ${({ type }) =>
    type === "change" &&
    css`
      background: var(--change-bg);
    `}
    
  ${({ type }) =>
    type === "comment" &&
    css`
      background: var(--comment-bg);
    `}
`;

export const RecentActivityItemContent = styled.div``;

export const RecentActivityItemFullname = styled.span``;

export const RecentActivityItemText = styled.span``;

export const RecentActivityItemDate = styled.div``;
