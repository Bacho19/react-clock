import React, { useState, useLayoutEffect } from "react";
import "./Clock.scss";

const Clock = () => {
  // github
  const [clockData, setClockDate] = useState({});

  useLayoutEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockDate({
        seconds: date.getSeconds(),
        minutes: date.getMinutes(),
        hours: date.getHours(),
      });
    }, 1000);
  }, []);

  const secondClock = clockData.seconds * 6 - 90;
  const minutesClock =
    clockData.minutes * 6 + (clockData.seconds / 60) * 6 - 90;
  const hoursClock = clockData.hours * 30 + (clockData.minutes / 60) * 30 - 90;

  return (
    <div className="wrapper">
      {/* <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span> */}
      <div className="clock">
        <div className="clock-center"></div>
        <div
          className="clock-arrow --second"
          style={{ transform: `rotate(${secondClock}deg)` }}
        ></div>
        <div
          className="clock-arrow --minute"
          style={{
            transform: `rotate(${minutesClock}deg)`,
          }}
        ></div>
        <div
          className="clock-arrow --hour"
          style={{
            transform: `rotate(${hoursClock}deg)`,
          }}
        ></div>
        <div className="clock-dot --top"></div>
        <div className="clock-dot --right"></div>
        <div className="clock-dot --bottom"></div>
        <div className="clock-dot --left"></div>
      </div>
    </div>
  );
};

export default Clock;
