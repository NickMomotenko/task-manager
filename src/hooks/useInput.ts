import { useRef, useState } from "react";

export const useInput = (initialValue?: string, name?: string) => {
  const [value, setValue] = useState<string>(initialValue ?? "");
  const [error, setError] = useState<string>("");

  const ref = useRef<any>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setValue(event.target.value);

  const clearValue = () => setValue("");

  return {
    ref,
    value,
    setValue,
    error,
    setError,
    handleChange,
    clearValue,
  };
};
