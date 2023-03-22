import styled, { css } from "styled-components";

import { Row } from "../Layout";

export const TableWrapp = styled.div``;

export const TableHeader = styled.div`
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 8px 0;

  display: flex;
`;

export const TableColumn = styled.div<{ flex?: number; center?: boolean }>`
  display: flex;

  ${({ flex }) =>
    flex &&
    css`
      flex-basis: ${flex}%;
    `}

  justify-content:${({ center }) => center && "center"};
  text-align: ${({ center }) => center && "center"};
`;

export const TableHeaderLabel = styled.div`
  font-size: 13px;
  color: #828282;
`;

export const TableBody = styled.div`
  margin-top: 16px;
`;

export const TableItem = styled.div`
  display: flex;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TableCheckbox = styled.div`
  margin-right: 13px;
  align-self: center;
`;

export const TableData = styled.div`
  width: 100%;
`;

export const TableProgressLine = styled(Row)``;

export const TableDataTitle = styled.div`
  font-weight: 600;
  font-size: 13px;
  color: #4f4f4f;
`;

export const TableStatus = styled.div`
  font-size: 11px;
  color: #219653;
`;

export const TableDate = styled.div`
  font-size: 11px;
  color: #bdbdbd;
`;

export const TableProgressLineCounter = styled.div`
  font-size: 11px;
  color: #bdbdbd;

  margin-left: 9px;
`;

export const TableList = styled.div``;
