import React, { useState } from "react";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import Alarm from "./components/Alarm/Alarm";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import ClockSwitch from "./components/ClockSwitch/ClockSwitch";
import { clockTypesContext, clockTypes } from "./contexts/ClockTypesContext";
import "./App.scss";

function App() {
  const [clockType, setClockType] = useState(clockTypes.ANALOG);

  return (
    <clockTypesContext.Provider value={clockType}>
      <ClockSwitch
        checked={clockType == clockTypes.DIGITAL}
        onChange={setClockType}
      />
      <div className="clock-wrapper">
        {clockType === clockTypes.ANALOG && <AnalogClock />}
        {clockType === clockTypes.DIGITAL && <DigitalClock />}
      </div>
      <Alarm />
    </clockTypesContext.Provider>
  );
}

export default App;
