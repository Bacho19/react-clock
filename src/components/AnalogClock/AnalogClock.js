import React, { useLayoutEffect } from "react";
import "./AnalogClock.scss";

const AnalogClock = ({ clockDate, setClockDate }) => {
  useLayoutEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockDate({
        seconds: date.getSeconds(),
        minutes: date.getMinutes(),
        hours: date.getHours(),
      });
    }, 1000);
  }, [setClockDate]);

  const secondClock = clockDate.seconds * 6 - 90;
  const minutesClock =
    clockDate.minutes * 6 + (clockDate.seconds / 60) * 6 - 90;
  const hoursClock = clockDate.hours * 30 + (clockDate.minutes / 60) * 30 - 90;
  return (
    <>
      {/* <span>{clockDate.hours}</span>:<span>{clockDate.minutes}</span>:
      <span>{clockDate.seconds}</span> */}
      <div className="analogClock">
        <div className="analogClock-center"></div>
        <div
          className="analogClock-arrow --second"
          style={{ transform: `rotate(${secondClock}deg)` }}
        ></div>
        <div
          className="analogClock-arrow --minute"
          style={{
            transform: `rotate(${minutesClock}deg)`,
          }}
        ></div>
        <div
          className="analogClock-arrow --hour"
          style={{
            transform: `rotate(${hoursClock}deg)`,
          }}
        ></div>
        <div className="analogClock-dot --top"></div>
        <div className="analogClock-dot --right"></div>
        <div className="analogClock-dot --bottom"></div>
        <div className="analogClock-dot --left"></div>
      </div>
    </>
  );
};

export default AnalogClock;
