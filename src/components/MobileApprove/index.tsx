import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useInput } from "../../hooks/useInput";
import { Input } from "../Input";

import {
  MobileApproveRow,
  MobileApproveWrapp,
  MobileApproveSubmit,
  MobileApproveTimer,
  MobileApproveTimerText,
  MobileApproveMessage,
} from "./styled";
import { Button } from "../Button";
import { useTimer } from "../../hooks/useTimer";
import { LoaderContext } from "../../context/LoaderContext";

export const MobileApprove = () => {
  const [index, setIndex] = useState(0);
  const [sending, setSending] = useState(false);

  const first = useInput();
  const second = useInput();
  const third = useInput();
  const fourth = useInput();

  const { startTimer, seconds, started } = useTimer({ initialValue: 5 });

  const loader = useContext(LoaderContext);

  const inputs = [first, second, third, fourth];

  const navigate = useNavigate();

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

  const handleValidateMobileCode = () => {
    const isValid = inputs.filter((item) => !item.value);

    if (!isValid.length) {
      setSending(true);

      const mobileCode = inputs.map((item) => item.value).join("");

      startTimer();

      loader.handleToggleOpen();

      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };

  return (
    <MobileApproveWrapp>
      <MobileApproveMessage>
        We have sent the code on your mobile phone
      </MobileApproveMessage>
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
      <MobileApproveSubmit>
        <Button onClick={handleValidateMobileCode} disabled={sending}>
          Validate
        </Button>
      </MobileApproveSubmit>
      {sending && (
        <MobileApproveTimer>
          <MobileApproveTimerText>
            <Button view="ghost">Try again</Button> after {seconds}
          </MobileApproveTimerText>
        </MobileApproveTimer>
      )}
    </MobileApproveWrapp>
  );
};
