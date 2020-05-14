import React, { useState } from "react";

import "../App.css";

const ActivityClock = () => {
  const [timerButtonIsActive, setTimerButton] = useState(false);

  const startClock = () => {
    console.log("starting clock");
    window.setTimeout(() => stopClock(), 1000);
  };

  const stopClock = () => {
    console.log("stopping clock");
    setTimerButton(false);
  };

  const triggerTimer = () => {
    console.log("triggered timer");
    setTimerButton(!timerButtonIsActive);
    startClock();
  };

  return (
    <div>
      {timerButtonIsActive ? (
        <button
          onClick={() => setTimerButton(!timerButtonIsActive)}
          className="activity-list-timer App-button-link"
        >
          <i className="fas fa-pause"></i>
          Pause
        </button>
      ) : (
        <button onClick={triggerTimer} className="activity-list-timer App-button-link">
          <i className="fas fa-clock"></i>
          Start
        </button>
      )}
    </div>
  );
};

export default ActivityClock;
