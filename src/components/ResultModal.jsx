import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(({ remainingTime, targetTime, onReset }, ref) => {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedTime = (remainingTime / 1000) .toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)

  useImperativeHandle(ref, () => {
    return {
      openModal() {
        dialog.current.showModal();
        
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost ? <h2>You Lost!</h2> : <h2>You Score is: {score}</h2>}
      <p>
        The Target Time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stop the timer with <strong>{formattedTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button >Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
