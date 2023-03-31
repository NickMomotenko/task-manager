import React from "react";

import { SelectInputWrapp, SelectInputValue } from "./styled";

export type SelectInputProps = {
  value: any;
  open?: boolean;
  onClick: () => void;
};

export const SelectInput = React.forwardRef<
  HTMLDivElement | null,
  SelectInputProps
>(({ value, open, onClick }, ref) => {
  return (
    <SelectInputWrapp ref={ref} onClick={onClick}>
      <SelectInputValue>{value}</SelectInputValue>
    </SelectInputWrapp>
  );
});
