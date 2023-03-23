import React from "react";

import { DefaultButton } from "../../components/Button";
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
      <Row btw>
        <FileAttachmentItemCol>
          <FileAttachmentItemIcon src={icon} alt="file icon" />
          <FileAttachmentItemFileName>{file_name}</FileAttachmentItemFileName>
        </FileAttachmentItemCol>
        <FileAttachmentItemCol>
          <FileAttachmentItemSize>{size}</FileAttachmentItemSize>
          <FileAttachmentItemButton>
            <DefaultButton text="Download" />
          </FileAttachmentItemButton>
        </FileAttachmentItemCol>
      </Row>
    </FileAttachmentItemStyles>
  );
};
