import React, { useState } from "react";
import Select from "react-select";
import "./Alarm.scss";

const hourOptions = [];
const minuteOptions = [];

for (let i = 0; i < 24; i++) {
  hourOptions.push({
    value: i,
    label: i < 10 ? "0" + i : i,
  });
}

for (let i = 0; i < 60; i++) {
  minuteOptions.push({
    value: i,
    label: i < 10 ? "0" + i : i,
  });
}

const Alarm = ({ clockDate }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isSet, setIsSet] = useState(false);

  const handleHours = (selectedHours) => {
    setHours(selectedHours);
  };

  const handleMinutes = (selectedMinutes) => {
    setMinutes(selectedMinutes);
  };

  const handleSetAlarm = () => {
    if (hours && minutes) {
      setIsSet(true);
    }
  };

  const handleResetAlarm = () => {
    setIsSet(false);
    setHours(0);
    setMinutes(0);
  };

  if (
    clockDate.hours === hours.value &&
    clockDate.minutes === minutes.value &&
    clockDate.seconds === 0 &&
    isSet
  ) {
    console.log("Alarm!..");
  }

  return (
    <div className="alarm">
      <div>
        <p className="alarm-text">Set time on alarm</p>
        <div className="alarm-selectors">
          <Select
            value={hours}
            onChange={handleHours}
            options={hourOptions}
            placeholder="Hours"
            isDisabled={isSet}
          />
          <Select
            value={minutes}
            onChange={handleMinutes}
            options={minuteOptions}
            placeholder="Minutes"
            isDisabled={isSet}
          />
          <button onClick={handleSetAlarm} disabled={isSet}>
            Set
          </button>
        </div>
        {isSet && (
          <div className="alarm-set">
            <p className="alarm-set__message">
              Alarm set on {hours.label}:{minutes.label}
            </p>
          </div>
        )}
        {isSet && <button onClick={handleResetAlarm}>Reset</button>}
      </div>
    </div>
  );
};

export default Alarm;
