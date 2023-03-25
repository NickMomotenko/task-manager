import React from "react";

import { Button } from "../../components/Button";
import { Row } from "../../components/Layout";

import {
  FileAttachmentItemStyles,
  FileAttachmentItemIcon,
  FileAttachmentItemFileName,
  FileAttachmentItemSize,
  FileAttachmentItemButton,
  FileAttachmentItemCol,
} from "./styled";

interface FileAttachmentItemProps {
  icon: string;
  size: string;
  file_name: string;
  author: {};
}

export const FileAttachmentItem: React.FC<FileAttachmentItemProps> = ({
  icon,
  size,
  file_name,
  author,
}) => {
  return (
    <FileAttachmentItemStyles>
      <Row verticalSpace="between">
        <FileAttachmentItemCol>
          <FileAttachmentItemIcon src={icon} alt="file icon" />
          <FileAttachmentItemFileName>{file_name}</FileAttachmentItemFileName>
        </FileAttachmentItemCol>
        <FileAttachmentItemCol>
          <FileAttachmentItemSize>{size}</FileAttachmentItemSize>
          <FileAttachmentItemButton>
            <Button view="ghost">Download</Button>
          </FileAttachmentItemButton>
        </FileAttachmentItemCol>
      </Row>
    </FileAttachmentItemStyles>
  );
};
