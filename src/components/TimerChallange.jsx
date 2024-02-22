import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const MILI_INTERVAL = 10;

export const TimerChallenge = ({ title, targetTime, ...props }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.openModal();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - MILI_INTERVAL);
    }, MILI_INTERVAL);
  }

  function handleStop() {
    dialog.current.openModal();
    clearInterval(timer.current);
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer is Inactive"}
        </p>
      </section>
    </>
  );
};
