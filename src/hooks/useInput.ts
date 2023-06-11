import { useEffect, useRef, useState } from "react";

import { checkLength } from "../helpers/input-validation";

export const useInput = (
  initialValue?: string,
  validatationRules: any[] = [checkLength]
) => {
  const [value, setValue] = useState<string>(initialValue ?? "");
  const [error, setError] = useState<string>("");
  const [validated, setValidated] = useState(false);
  const [isBlured, setIsBlured] = useState(false);

  const ref = useRef<any>();

  useEffect(() => {
    if (isBlured) {
      validateInputWithRules();
    }
  }, [isBlured]);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  const validateInputWithRules = () => {
    for (const rule of validatationRules) {
      const { isCorrect, errorText } = rule(value);

      if (!isCorrect) {
        setError(errorText);
        setValidated(false);
        break;
      } else {
        setError("");
        setValidated(true);
      }
    }
  };

  const clearValue = () => setValue("");

  return {
    ref,
    value,
    setValue,
    error,
    setError,
    handleChange,
    clearValue,
    isBlured,
    setIsBlured,
    validated,
  };
};
