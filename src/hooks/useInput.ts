import React, { useState } from "react";

interface InputProps {
  initialValue?: string;
  name?: string;
}

export const useInput: React.FC<InputProps> = ({ initialValue }) => {
  const [value, setValue] = useState<string>(initialValue ?? "");
  const [error, setError] = useState<string>("");

  const onChange = (event: any) => setValue(event.target.value);

  const onFocus = () => {};

  //   const onKeyDown = (e) => {
  //     console.log(e);
  //   };

  // function getFocus() {
  //   ref?.current.focus();
  // }

  const clearValue = () => setValue("");

  return {
    value,
    setValue,
    error,
    setError,
    onChange,
    onFocus,
    // onKeyDown,
    clearValue,
  };
};
