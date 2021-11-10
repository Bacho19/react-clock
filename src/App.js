import React, { useState } from "react";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import Alarm from "./components/Alarm/Alarm";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import ClockSwitch from "./components/ClockSwitch/ClockSwitch";
import "./App.scss";

// const clockTypes = {
//   DIGITAL: "digital",
//   ANALOG: "analog",
// };

function App() {
  // const [clockType, setClockType] = useState(clockTypes.ANALOG);
  const [checked, setChecked] = useState(false);

  // const handleClockType = (clockType) => {
  //   setClockType(clockType);
  // };

  return (
    <>
      <ClockSwitch checked={checked} setChecked={setChecked} />
      <div className="clock-wrapper">
        {/* {clockType === clockTypes.ANALOG && <AnalogClock />}
        {clockType === clockTypes.DIGITAL && <DigitalClock />} */}
        {checked ? <DigitalClock /> : <AnalogClock />}
      </div>
      <Alarm />
    </>
  );
}

export default App;
