import { useLayoutEffect, useRef } from "react";

export const useDigitalClock = () => {
  const millisecondsRef = useRef();
  const secondsRef = useRef();
  const minutesRef = useRef();
  const hoursRef = useRef();

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      if (hoursRef.current.innerText != date.getHours()) {
        hoursRef.current.innerText =
          date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      }
      if (minutesRef.current.innerText != date.getMinutes()) {
        minutesRef.current.innerText =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      }
      if (secondsRef.current.innerText != date.getSeconds()) {
        secondsRef.current.innerText =
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      }
      if (millisecondsRef.current.innerText != date.getMilliseconds()) {
        millisecondsRef.current.innerText =
          date.getMilliseconds() < 100
            ? date.getMilliseconds() < 10
              ? "00" + date.getMilliseconds()
              : "0" + date.getMilliseconds()
            : date.getMilliseconds();
      }
    }, 1);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    millisecondsRef,
    secondsRef,
    minutesRef,
    hoursRef,
  };
};
