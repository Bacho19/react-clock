import React, { useContext } from "react";
import {
  clockTypesContext,
  clockTypes,
} from "../../contexts/ClockTypesContext";
import "./ClockSwitch.scss";

const ClockSwitch = ({ checked, onChange }) => {
  const clockType = useContext(clockTypesContext);

  return (
    <div className="switch-wrapper">
      <label className="switch">
        <input
          className="switch-checkbox"
          checked={checked}
          type="checkbox"
          onChange={() =>
            onChange(
              clockType == clockTypes.ANALOG
                ? clockTypes.DIGITAL
                : clockTypes.ANALOG
            )
          }
        />
        <span className="switch-slider"></span>
      </label>
    </div>
  );
};

export default ClockSwitch;
