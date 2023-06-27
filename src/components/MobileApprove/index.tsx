import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useTimer } from "../../hooks/useTimer";

import { Input } from "../Input";
import { Button } from "../Button";
import { Form } from "../Form";

import { LoaderContext } from "../../context/LoaderContext";

import {
  MobileApproveRow,
  MobileApproveWrapp,
  MobileApproveSubmit,
  MobileApproveTimer,
  MobileApproveTimerText,
  MobileApproveMessage,
} from "./styled";

import { routes } from "../../helpers/routes";

const schema = yup
  .object({
    first: yup.string(),
    second: yup.string(),
    third: yup.string(),
    fourth: yup.string(),
  })
  .required();

export const MobileApprove = () => {
  const [index, setIndex] = useState(0);
  const [sending, setSending] = useState(false);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const firstRef = useRef<HTMLInputElement | any>(null);
  const secondRef = useRef<HTMLInputElement | any>(null);
  const thirdRef = useRef<HTMLInputElement | any>(null);
  const fourthRef = useRef<HTMLInputElement | any>(null);

  const first = register("first");
  const second = register("second");
  const third = register("third");
  const fourth = register("fourth");

  const inputRefs = [firstRef, secondRef, thirdRef, fourthRef];

  const { startTimer, seconds, stopTimer } = useTimer();
  const loader = useContext(LoaderContext);
  const navigate = useNavigate();

  useEffect(() => {
    setSending(true);
    startTimer(30).then(() => {
      setSending(false);
    });
  }, []);

  const onSubmit = handleSubmit(() => {
    const isValid =
      inputRefs.filter((input) => !input.current.value).length === 0;

    if (isValid) {
      stopTimer();

      loader.handleToggleOpen(true);

      setTimeout(() => {
        navigate(routes.base);
      }, 1000);
    }
  });

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.keyCode === 8) {
      if (inputRefs[index - 1]) {
        inputRefs[index - 1].current.disabled = false;
        inputRefs[index - 1].current.focus();
        inputRefs[index].current.disabled = true;
        setIndex((prev) => prev - 1);
      } else {
        inputRefs[index].current.focus();
      }
    } else {
      if (inputRefs[index + 1]) {
        inputRefs[index].current.disabled = true;
        inputRefs[index + 1].current.disabled = false;
        inputRefs[index + 1].current.focus();

        setIndex((prev) => prev + 1);
      }
    }
  };

  const handleTryAgain = () => {
    setSending(true);
    startTimer(30).then(() => {
      setSending(false);
    });
  };

  return (
    <MobileApproveWrapp>
      <MobileApproveMessage>
        We have sent the code on your mobile phone
      </MobileApproveMessage>
      <Form onSubmit={onSubmit}>
        <MobileApproveRow>
          <Input
            maxLength={1}
            {...first}
            name="first"
            ref={(e: any) => {
              first.ref(e);
              firstRef.current = e;
            }}
            onKeyUp={handleKeyUp}
          />
          <Input
            maxLength={1}
            {...second}
            name="second"
            ref={(e: any) => {
              second.ref(e);
              secondRef.current = e;
            }}
            disabled={true}
            onKeyUp={handleKeyUp}
          />
          <Input
            maxLength={1}
            {...third}
            name="third"
            ref={(e: any) => {
              third.ref(e);
              thirdRef.current = e;
            }}
            disabled={true}
            onKeyUp={handleKeyUp}
          />
          <Input
            maxLength={1}
            {...fourth}
            name="fourth"
            ref={(e: any) => {
              fourth.ref(e);
              fourthRef.current = e;
            }}
            disabled={true}
            onKeyUp={handleKeyUp}
          />
        </MobileApproveRow>
        <MobileApproveSubmit>
          <Button type="submit">Validate</Button>
        </MobileApproveSubmit>
      </Form>
      <MobileApproveTimer>
        <MobileApproveTimerText>
          <Button view="ghost" onClick={handleTryAgain} disabled={sending}>
            Get a new code
          </Button>{" "}
          after {seconds}
        </MobileApproveTimerText>
      </MobileApproveTimer>
    </MobileApproveWrapp>
  );
};
