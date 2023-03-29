import { useState } from "react";

export const useInput = (initialValue?: string, name?: string) => {
  const [value, setValue] = useState<string>(initialValue ?? "");
  const [error, setError] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

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
    handleChange,
    onFocus,
    // onKeyDown,
    clearValue,
  };
};