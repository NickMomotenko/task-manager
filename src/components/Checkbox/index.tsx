import React from "react";

import { CheckboxWrapp, CheckboxInput, CheckboxFake } from "./styled";

export type ButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  initialState: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox: React.FC<ButtonProps> = ({
  initialState,
  onChange,
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
      <CheckboxFake isChecked={initialState} />
    </CheckboxWrapp>
  );
};
