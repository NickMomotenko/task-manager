import React, { useState } from "react";
import { Icon } from "../Icon";

import { InputBody, InputWrapp ,InputIcon } from "./styled";

interface InputProps {
  initialValue?: string;
  placeholder?: string;
  icon?: string;
}

export const Input: React.FC<InputProps> = ({
  initialValue = "",
  placeholder = "",
  icon,
}) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <InputWrapp>
      {icon && (
        <InputIcon>
          <Icon src={icon} alt="icon" />
        </InputIcon>
      )}
      <InputBody
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </InputWrapp>
  );
};
