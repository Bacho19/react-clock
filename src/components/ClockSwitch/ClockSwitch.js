import React, { useState } from "react";
import "./ClockSwitch.scss";

const ClockSwitch = ({ checked, setChecked }) => {
  return (
    <div className="switch-wrapper">
      <label className="switch">
        <input
          className="switch-checkbox"
          checked={checked}
          type="checkbox"
          onChange={() => setChecked((prev) => !prev)}
        />
        <span className="switch-slider"></span>
      </label>
    </div>
  );
};

export default ClockSwitch;
