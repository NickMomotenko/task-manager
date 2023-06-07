import { useEffect, useRef, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { Input } from "../Input";

import { MobileApproveRow, MobileApproveWrapp } from "./styled";

export const MobileApprove = () => {
  const [index, setIndex] = useState(0);

  const first = useInput();
  const second = useInput();
  const third = useInput();
  const fourth = useInput();

  const inputs = [first, second, third, fourth];

  useEffect(() => {
    inputs[index].ref.current.focus();
  }, []);

  useEffect(
    () => {
      for (let i = 0; i < inputs.length; i++) {
        const current = inputs[index];

        if (current.value.length) {
          if (index === inputs.length - 1) {
            inputs[inputs.length - 1].ref.current.focus();
          } else {
            inputs[index + 1].ref.current.focus();
            setIndex((prev) => prev + 1);
            break;
          }
        } else {
          inputs[index].ref.current.focus();
        }
      }
    },
    inputs.map((item) => item.value)
  );

  return (
    <MobileApproveWrapp>
      <MobileApproveRow>
        <Input
          value={first.value}
          onChange={first.handleChange}
          ref={first.ref}
          maxLength={1}
        />
        <Input
          value={second.value}
          onChange={second.handleChange}
          ref={second.ref}
          maxLength={1}
        />
        <Input
          value={third.value}
          onChange={third.handleChange}
          ref={third.ref}
          maxLength={1}
        />
        <Input
          value={fourth.value}
          onChange={fourth.handleChange}
          ref={fourth.ref}
          maxLength={1}
        />
      </MobileApproveRow>
    </MobileApproveWrapp>
  );
};
