import styled from "styled-components";

import { Row } from "../../components/Layout";

export const FileAttachmentBody = styled.div`
  margin-top: 15px;
`;

export const FileAttachmentList = styled.ul`
  margin-bottom: 28px;
  overflow: auto;
`;

export const FileAttachmentItemStyles = styled.li`
  margin-bottom: 28px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FileAttachmentItemIcon = styled.img`
  display: inline-block;
  margin-right: 20px;
  height: 42px;
`;

export const FileAttachmentItemFileName = styled.div`
  font-weight: 600;
  font-size: 13px;
  color: #333333;
`;

export const FileAttachmentItemSize = styled.div`
  font-size: 13px;
  color: #4f4f4f;
`;

export const FileAttachmentItemButton = styled.div`
  min-width: 85px;
  margin-left: 14px;
  text-align: right;
`;

export const FileAttachmentItemCol = styled(Row)`
  margin-right: 35px;

  &:last-child {
    margin-right: 0;
  }
`;
