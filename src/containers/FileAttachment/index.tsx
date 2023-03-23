import { useEffect, useRef, useState } from "react";

import { Title } from "../../components/Title";

import { FileAttachmentItem } from "./FileAttachmentItem";

import {
  FileAttachmentWrapp,
  FileAttachmentHeader,
  FileAttachmentBody,
  FileAttachmentDropSpace,
  FileAttachmentDropSpaceText,
  FileAttachmentDropSpaceTextSpan,
  FileAttachmentList,
  FileAttachmentPaper,
  FileAttachmentBodyWrapper,
} from "./styled";

import { files } from "./mock";
import { useToggleClicker } from "../../hooks/useToggleClicker";

export const FileAttachment = () => {
  const { bodyRef, bodyWrappRef, handleOpenClick } = useToggleClicker(false);

  return (
    <FileAttachmentWrapp>
      <FileAttachmentPaper>
        <FileAttachmentHeader onClick={handleOpenClick}>
          <Title text="File Attachment" />
        </FileAttachmentHeader>
        <FileAttachmentBody ref={bodyRef}>
          <FileAttachmentBodyWrapper ref={bodyWrappRef}>
            <FileAttachmentList>
              {files.map((file) => (
                <FileAttachmentItem key={file.id} {...file} />
              ))}
            </FileAttachmentList>
            <FileAttachmentDropSpace>
              <FileAttachmentDropSpaceText>
                Choose a file
                <FileAttachmentDropSpaceTextSpan>
                  or drag it here
                </FileAttachmentDropSpaceTextSpan>
              </FileAttachmentDropSpaceText>
            </FileAttachmentDropSpace>
          </FileAttachmentBodyWrapper>
        </FileAttachmentBody>
      </FileAttachmentPaper>
    </FileAttachmentWrapp>
  );
};
