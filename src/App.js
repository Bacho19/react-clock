import React, { useState } from "react";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import Alarm from "./components/Alarm/Alarm";
import "./App.scss";

function App() {
  const [clockDate, setClockDate] = useState({});

  return (
    <>
      <div className="clock-wrapper">
        <AnalogClock clockDate={clockDate} setClockDate={setClockDate} />
      </div>
      <Alarm clockDate={clockDate} />
    </>
  );
}

export default App;
