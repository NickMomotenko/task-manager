import React, { useState } from "react";

import { CheckboxWrapp, CheckboxInput, CheckboxFake } from "./styled";

interface CheckboxProps {
  initialState: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ initialState }) => {
  const [isChecked, setIsChecked] = useState<boolean>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setIsChecked(event.target.checked);

  return (
    <CheckboxWrapp>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <CheckboxFake isChecked={isChecked} />
    </CheckboxWrapp>
  );
};
