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

import arrowIcon from "../../assets/icons/arrow.svg";

import { IFiles } from "./types";

type FileAttachmentProps = {
  files: IFiles[];
};

export const FileAttachment: React.FC<FileAttachmentProps> = ({ files }) => {
  return (
    <FileAttachmentWrapp>
      <FileAttachmentPaper>
        <Accordion
          header={
            <FileAttachmentHeader gorizontalSpace="between">
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
              {files?.map((file) => (
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
