import styled from "styled-components";
import { Row } from "../../components/Layout";
import { PaperWrapp } from "../../components/Paper/styled";

export const FileAttachmentWrapp = styled.div``;

export const FileAttachmentPaper = styled(PaperWrapp)`
  min-width: 400px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FileAttachmentHeader = styled(Row)``;

export const FileAttachmentBody = styled.div`
  margin-top: 28px;
`;

export const FileAttachmentDropSpace = styled.div`
  height: 88px;
  background: #f2f2f2;
  border: 1px dashed #bdbdbd;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const FileAttachmentDropSpaceText = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: #4f4f4f;
  display: inline-flex;
`;

export const FileAttachmentDropSpaceTextSpan = styled.div`
  font-size: 12px;
  color: #828282;
  margin-left: 3.5px;
`;

export const FileAttachmentList = styled.ul`
  margin-bottom: 28px;
  overflow: auto;
  // max-height: 60%;
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
