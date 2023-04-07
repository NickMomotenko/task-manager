import styled from "styled-components";

export const FileDropWrapp = styled.div``;

export const FileDropInput = styled.input`
  display: none;
`;

export const FileDropLabel = styled.label`
  --drop-h: 88px;
  --drop-bg: #f2f2f2;
  --drop-radius: 8px;

  height: var(--drop-h);
  background: var(--drop-bg);
  border: 1px dashed #bdbdbd;
  border-radius: var(--drop-radius);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FileDropText = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: #4f4f4f;

  span {
    font-size: 12px;
    color: #828282;
  }
`;
