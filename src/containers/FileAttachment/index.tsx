import { Title } from "../../components/Title";
import { Icon } from "../../components/Icon";

import { FileAttachmentItem } from "./FileAttachmentItem";
import { Accordion } from "../Accordion";

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

import { files } from "./data";

import arrowIcon from "../../assets/icons/arrow.svg";

export const FileAttachment = () => {
  return (
    <FileAttachmentWrapp>
      <FileAttachmentPaper>
        <Accordion
          header={
            <FileAttachmentHeader verticalSpace="between">
              <Title text="File Attachment" />
              <Icon
                src={arrowIcon}
                alt="arrow icon"
                size={{ h: "15px", w: "15px" }}
              />
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
