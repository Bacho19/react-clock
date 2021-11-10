import React from "react";
import "./DigitalClock.scss";
import { useDigitalClock } from "./useDigitalClock";

const DigitalClock = () => {
  const { hoursRef, minutesRef, secondsRef, millisecondsRef } =
    useDigitalClock();

  return (
    <div className="digitalClock">
      <div className="digitalClock-item">
        <p className="digitalClock-item__number" ref={hoursRef}>
          -
        </p>
        <p className="digitalClock-item__text">hours</p>
      </div>
      <span className="digitalClock-colon">:</span>
      <div className="digitalClock-item">
        <p className="digitalClock-item__number" ref={minutesRef}>
          -
        </p>
        <p className="digitalClock-item__text">minutes</p>
      </div>
      <span className="digitalClock-colon">:</span>
      <div className="digitalClock-item">
        <p className="digitalClock-item__number" ref={secondsRef}>
          -
        </p>
        <p className="digitalClock-item__text">seconds</p>
      </div>
      <span className="digitalClock-colon">:</span>
      <div className="digitalClock-item">
        <p className="digitalClock-item__number" ref={millisecondsRef}>
          -
        </p>
        <p className="digitalClock-item__text">milliseconds</p>
      </div>
    </div>
  );
};

export default DigitalClock;
