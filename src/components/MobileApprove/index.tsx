import { useEffect, useRef } from "react";
import { useInput } from "../../hooks/useInput";
import { Input } from "../Input";

import { MobileApproveRow, MobileApproveWrapp } from "./styled";

export const MobileApprove = () => {
  const first = useInput();
  const second = useInput();
  const third = useInput();
  const fourth = useInput();

  useEffect(() => {
    first.ref.current.focus();
  }, []);

  useEffect(() => {
    if (checkLength(first.value)) {
      second.ref.current.focus();
    }

    if (checkLength(second.value)) {
      third.ref.current.focus();
    }

    if (checkLength(third.value)) {
      fourth.ref.current.focus();
    }

    if (checkLength(fourth.value)) {
      console.log(111);
    } else return;
  }, [first.value, second.value, third.value, fourth.value]);

  function checkLength(value: string) {
    return value.length === 1;
  }

  return (
    <MobileApproveWrapp>
      <MobileApproveRow>
        <Input
          value={first.value}
          onChange={first.handleChange}
          ref={first.ref}
        />
        <Input
          value={second.value}
          onChange={second.handleChange}
          ref={second.ref}
        />
        <Input
          value={third.value}
          onChange={third.handleChange}
          ref={third.ref}
        />
        <Input
          value={fourth.value}
          onChange={fourth.handleChange}
          ref={fourth.ref}
        />
      </MobileApproveRow>
    </MobileApproveWrapp>
  );
};
