import React, { useLayoutEffect } from "react";
import "./DigitalClock.scss";

const DigitalClock = ({ clockDate, setClockDate }) => {
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setClockDate({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        milliseconds: date.getMilliseconds(),
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [setClockDate]);
  return (
    <div className="digitalClock">
      <div className="digitalClock-item">
        <p className="digitalClock-item__number">
          {clockDate.hours < 10 ? "0" + clockDate.hours : clockDate.hours}
        </p>
        <p className="digitalClock-item__text">hours</p>
      </div>
      <span className="digitalClock-colon">:</span>
      <div className="digitalClock-item">
        <p className="digitalClock-item__number">
          {clockDate.minutes < 10 ? "0" + clockDate.minutes : clockDate.minutes}
        </p>
        <p className="digitalClock-item__text">minutes</p>
      </div>
      <span className="digitalClock-colon">:</span>
      <div className="digitalClock-item">
        <p className="digitalClock-item__number">
          {clockDate.seconds < 10 ? "0" + clockDate.seconds : clockDate.seconds}
        </p>
        <p className="digitalClock-item__text">seconds</p>
      </div>
      <span className="digitalClock-colon">:</span>
      <div className="digitalClock-item">
        <p className="digitalClock-item__number">
          {clockDate.seconds < 10
            ? "0" + clockDate.milliseconds
            : clockDate.milliseconds}
        </p>
        <p className="digitalClock-item__text">seconds</p>
      </div>
    </div>
  );
};

export default DigitalClock;
