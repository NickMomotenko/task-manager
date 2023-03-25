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
import { Accordion } from "../Accordion";

export const FileAttachment = () => {
  return (
    <FileAttachmentWrapp>
      <FileAttachmentPaper>
        <Accordion
          header={
            <FileAttachmentHeader>
              <Title text="File Attachment" />
            </FileAttachmentHeader>
          }
        >
          <FileAttachmentBody>
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
          </FileAttachmentBody>
        </Accordion>
      </FileAttachmentPaper>
    </FileAttachmentWrapp>
  );
};
