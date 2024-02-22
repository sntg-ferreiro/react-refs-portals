import Player from "./components/Player.jsx";
import { TimerChallenge } from "./components/TimerChallange.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Harder" targetTime={10} />
        <TimerChallenge title="Pros Only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
