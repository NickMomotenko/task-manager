import { useEffect, useState } from "react";

export const useTimer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [started, setStarted] = useState(false);

  let intervalId: any;

  useEffect(() => {
    if (started) {
      if (seconds !== 0) {
        doTimer();

        return () => clearInterval(intervalId);
      } else {
        setStarted(false);
      }
    }
  }, [seconds, started]);

  function startTimer(seconds: number): Promise<void | boolean> {
    setSeconds(seconds);
    setStarted(true);

    return new Promise<void | boolean>((resolve) => {
      setTimeout(() => {
        resolve();
      }, seconds * 1000);
    });
  }

  function doTimer() {
    intervalId = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
  }

  function stopTimer() {
    setSeconds(0);
    clearInterval(intervalId);
  }

  return { seconds, startTimer, stopTimer, started };
};
