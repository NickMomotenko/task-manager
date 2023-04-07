import { FileAttachmentItem } from "./FileAttachmentItem";
import { Accordion } from "../Accordion";
import { FileDrop } from "../FileDrop";

import { FileAttachmentBody, FileAttachmentList } from "./styled";

import { IFiles } from "./types";

type FileAttachmentProps = {
  files: IFiles[];
};

export const FileAttachment: React.FC<FileAttachmentProps> = ({ files }) => {
  return (
    <Accordion title="File Attachments">
      <FileAttachmentBody>
        <FileAttachmentList>
          {files?.map((file) => (
            <FileAttachmentItem key={file.id} {...file} />
          ))}
        </FileAttachmentList>
        <FileDrop />
      </FileAttachmentBody>
    </Accordion>
  );
};
