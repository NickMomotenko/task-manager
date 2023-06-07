import { useEffect, useState } from "react";

type TimerProps = {
  initialValue?: number;
};

export const useTimer = ({ initialValue }: TimerProps) => {
  const [seconds, setSeconds] = useState<number>(initialValue ?? 10);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) {
      if (seconds !== 0) {
        const intervalId = setInterval(() => {
          setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(intervalId);
      } else {
        setStarted(false);
      }
    }
  }, [seconds , started]);

  function startTimer() {
    setStarted(true);
  }

  return { seconds, startTimer , started };
};
