import { Paper } from "../../components/Paper";
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
} from "./styled";

import { files } from "./mock";

export const FileAttachment = () => {
  return (
    <FileAttachmentWrapp>
      <FileAttachmentPaper>
        <FileAttachmentHeader>
          <Title text="File Attachment" />
        </FileAttachmentHeader>
        <FileAttachmentBody>
          <FileAttachmentList>
            {files.map((file) => (
              <FileAttachmentItem key={file.id} {...file} />
            ))}
          </FileAttachmentList>
        </FileAttachmentBody>
        <FileAttachmentDropSpace>
          <FileAttachmentDropSpaceText>
            Choose a file
            <FileAttachmentDropSpaceTextSpan>
              or drag it here
            </FileAttachmentDropSpaceTextSpan>
          </FileAttachmentDropSpaceText>
        </FileAttachmentDropSpace>
      </FileAttachmentPaper>
    </FileAttachmentWrapp>
  );
};
