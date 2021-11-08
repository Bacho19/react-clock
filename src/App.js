import React, { useState } from "react";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import Alarm from "./components/Alarm/Alarm";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import "./App.scss";
import Button from "./components/Button/Button";

const clockTypes = {
  DIGITAL: "digital",
  ANALOG: "analog",
};

function App() {
  const [clockDate, setClockDate] = useState({});
  const [clockType, setClockType] = useState(clockTypes.ANALOG);

  const handleClockType = (clockType) => {
    setClockType(clockType);
  };

  return (
    <>
      <Button onClick={() => handleClockType(clockTypes.ANALOG)}>Analog</Button>
      <Button onClick={() => handleClockType(clockTypes.DIGITAL)}>
        Digital
      </Button>
      <div className="clock-wrapper">
        {clockType === clockTypes.ANALOG && (
          <AnalogClock clockDate={clockDate} setClockDate={setClockDate} />
        )}
        {clockType === clockTypes.DIGITAL && (
          <DigitalClock clockDate={clockDate} setClockDate={setClockDate} />
        )}
      </div>
      <Alarm clockDate={clockDate} />
    </>
  );
}

export default App;
