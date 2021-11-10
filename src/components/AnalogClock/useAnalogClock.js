import { useLayoutEffect, useRef } from "react";

export const useAnalogClock = () => {
  const secondsRef = useRef();
  const minutesRef = useRef();
  const hoursRef = useRef();

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();

      const secondClock = date.getSeconds() * 6 - 90;
      const minutesClock =
        date.getMinutes() * 6 + (date.getSeconds() / 60) * 6 - 90;
      const hoursClock =
        date.getHours() * 30 + (date.getMinutes() / 60) * 30 - 90;

      secondsRef.current.style.transform = `rotate(${secondClock}deg`;
      minutesRef.current.style.transform = `rotate(${minutesClock}deg`;
      if (hoursRef.current.style.transform != `rotate(${hoursClock}deg`) {
        hoursRef.current.style.transform = `rotate(${hoursClock}deg`;
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    hoursRef,
    minutesRef,
    secondsRef,
  };
};
