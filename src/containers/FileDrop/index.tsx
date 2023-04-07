import {
  FileDropInput,
  FileDropLabel,
  FileDropWrapp,
  FileDropText,
} from "./styled";

export const FileDrop = () => {
  return (
    <FileDropWrapp>
      <FileDropInput type="file" id="drop" />
      <FileDropLabel htmlFor="drop">
        <FileDropText>
          Choose a file <span>or drag it here</span>
        </FileDropText>
      </FileDropLabel>
    </FileDropWrapp>
  );
};
