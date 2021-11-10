import React, { useState, useLayoutEffect } from "react";
import Select from "react-select";
import Button from "../Button/Button";
import AlarmModal from "../AlarmModal/AlarmModal";
import "./Alarm.scss";
import classicAlarm from "../../static/classic-alarm.mp3";

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

const Alarm = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isSet, setIsSet] = useState(false);
  const [alarmModalIsOpen, setAlarmModalIsOpen] = useState(false);

  const alarmAudio = new Audio(classicAlarm);

  useLayoutEffect(() => {
    if (isSet === true) {
      const clockInterval = setInterval(() => {
        const date = new Date();

        if (
          date.getHours() === hours.value &&
          date.getMinutes() === minutes.value &&
          date.getSeconds() === 0 &&
          isSet
        ) {
          alarmAudio.play();
          setAlarmModalIsOpen(true);
        }
      }, 1000);

      return () => {
        clearInterval(clockInterval);
      };
    }
  }, [isSet, alarmAudio, hours.value, minutes.value]);

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

  const handleCloseModal = () => {
    setAlarmModalIsOpen((state) => !state);
    handleResetAlarm();
  };

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
          <div className="alarm-selectors__setButton">
            <Button onClick={handleSetAlarm} disabled={isSet}>
              Set
            </Button>
          </div>
        </div>
        {isSet && (
          <div className="alarm-set">
            <p className="alarm-set__message">
              Alarm set on {hours.label}:{minutes.label}
            </p>
          </div>
        )}
        {isSet && (
          <div className="alarm-reset">
            <Button onClick={handleResetAlarm}>Reset</Button>
          </div>
        )}
      </div>
      <AlarmModal
        alarmModalIsOpen={alarmModalIsOpen}
        handleCloseModal={handleCloseModal}
        hours={hours.label}
        minutes={minutes.label}
      />
    </div>
  );
};

export default Alarm;
