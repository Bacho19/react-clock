import React from "react";
import { useAnalogClock } from "./useAnalogClock";
import "./AnalogClock.scss";

const AnalogClock = () => {
  const { hoursRef, minutesRef, secondsRef } = useAnalogClock();
  return (
    <div className="analogClock">
      <div className="analogClock-center"></div>
      <div ref={secondsRef} className="analogClock-arrow --second"></div>
      <div ref={minutesRef} className="analogClock-arrow --minute"></div>
      <div ref={hoursRef} className="analogClock-arrow --hour"></div>
      <div className="analogClock-dot --top"></div>
      <div className="analogClock-dot --right"></div>
      <div className="analogClock-dot --bottom"></div>
      <div className="analogClock-dot --left"></div>
    </div>
  );
};

export default AnalogClock;
