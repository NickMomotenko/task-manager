import React from "react";

import { CheckboxWrapp, CheckboxInput, CheckboxFake } from "./styled";

type TCheckboxView = "circle" | "round";

export type ButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  initialState?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  view?: TCheckboxView;
};

export const Checkbox: React.FC<ButtonProps> = ({
  initialState = false,
  onChange,
  view = "circle",
  ...rest
}) => {
  return (
    <CheckboxWrapp>
      <CheckboxInput
        type="checkbox"
        checked={initialState}
        onChange={onChange}
        {...rest}
      />
      <CheckboxFake isChecked={initialState} view={view} />
    </CheckboxWrapp>
  );
};
