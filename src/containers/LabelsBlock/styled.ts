import styled, { css } from "styled-components";

export const LabelsBlockWrapp = styled.div``;

export const LabelsBlockList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: -5px;
  margin-right: -5px;
`;

export const LabelsBlockItem = styled.div`
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const LabelsBlockButton = styled.button<{ isChecked: boolean }>`
  --label-radius: 24px;
  --label-bg: #2f80ed;
  --label-color: #fff;
  --label-padding: 2px 10px;

  display: inline-block;
  border: 1px solid var(--label-bg);
  border-radius: var(--label-radius);
  color: var(--label-bg);
  padding: var(--label-padding);

  ${({ isChecked }) =>
    isChecked &&
    css`
      background: var(--label-bg);
      color: var(--label-color);
    `}
`;
