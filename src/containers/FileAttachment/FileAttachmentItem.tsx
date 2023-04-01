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

import pdfIcon from "../../assets/icons/pdf.png";
import csvIcon from "../../assets/icons/csv.png";
import xlsIcon from "../../assets/icons/xls.png";
import jpgIcon from "../../assets/icons/jpg.png";

import { IFiles } from "./types";

export const FileAttachmentItem: React.FC<IFiles> = ({
  // icon,
  file_size,
  file_name = "",
  owner,
}) => {
  const getIcon = (type: string) => {
    if (type === "xls") {
      return xlsIcon;
    }

    if (type === "pdf") {
      return pdfIcon;
    }

    if (type === "csv") {
      return csvIcon;
    }

    if (type === "jpg") {
      return jpgIcon;
    }
  };

  return (
    <FileAttachmentItemStyles>
      <Row gorizontalSpace="between">
        <FileAttachmentItemCol>
          <FileAttachmentItemIcon
            src={getIcon(file_name.split(".").at(-1))}
            alt="file icon"
          />
          <FileAttachmentItemFileName>{file_name}</FileAttachmentItemFileName>
        </FileAttachmentItemCol>
        <FileAttachmentItemCol>
          <FileAttachmentItemSize>{file_size}</FileAttachmentItemSize>
          <FileAttachmentItemButton>
            <Button view="ghost">Download</Button>
          </FileAttachmentItemButton>
        </FileAttachmentItemCol>
      </Row>
    </FileAttachmentItemStyles>
  );
};
