import { useRef, useState } from "react";

export const useTextarea = (initialValue?: string, name?: string) => {
  const [value, setValue] = useState<string>(initialValue ?? "");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const ref = useRef<React.Ref<HTMLTextAreaElement>>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(event.target.value);

  const onFocus = () => {};

  //   const onKeyDown = (e) => {
  //     console.log(e);
  //   };

  function getFocus() {
    ref?.current?.focus();
  }

  const clearValue = () => setValue("");

  return {
    ref,
    value,
    isFocused,
    error,
    setError,
    handleChange,
    onFocus,
    // onKeyDown,
    getFocus,
    clearValue,
  };
};
