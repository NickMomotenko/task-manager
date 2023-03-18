import React, { useState } from "react";

import { InputBody, InputWrapp } from "./styled";

interface InputProps {
  initialValue: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  initialValue,
  placeholder = "",
}) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <InputWrapp>
      <InputBody
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </InputWrapp>
  );
};
