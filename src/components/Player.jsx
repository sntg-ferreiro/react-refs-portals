import { useState, useRef } from "react";

export default function Player() {
  const inputName = useRef();
  const [playerName, setPlayerName] = useState("");

  function handleClick() {
    setPlayerName(inputName.current.value);
    //^^ Aca estamos al borde del paradigma declarativo de react
    inputName.current.value = "";
    //^^ Aca es estrictamente imperativo, evitar siempre que sea posible. Casos como este, safan
  }

  return (
    <section id="player">
      {/**
       *  {playerName ?? "unknown entity"}
       *  ===
       *  {playerName ? playerName : "unknown entity"}
       */}
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={inputName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
