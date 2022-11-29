import React, { useState } from "react";
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import PopUpSteps, { StateGameType } from "./components/PopUpSteps";
import Timer from "./helper/Timer/Timer";

function App() {
  const [state, setState] = useState<StateGameType>("start");
  const [startTime, setStartTime] = useState(0);

  return (
    <div className="App">
      <div className="timerWrap">
        <span>Time Game: &nbsp;</span>
        <Timer time={startTime} />
      </div>
      <PopUpSteps
        callback={(current) => {
          if (current === "start") {
            setState("counter");
            setStartTime(Date.now());
          }
        }}
        state={state}
      />
      <BoardComponent />
    </div>
  );
}

export default App;
