import React, { useState } from "react";

import { TextareaWrapp, TextareaBody } from "./styled";

interface TextareaProps {
  placeholder: string;
  initialValue?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  initialValue = "",
  placeholder = "name@email.com, name@email.com, ...",
}) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(event.target.value);

  return (
    <TextareaWrapp>
      <TextareaBody
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </TextareaWrapp>
  );
};
