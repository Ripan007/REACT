import Player from "./components/Players";
import "./App.css";
import TimerChallenge from "./components/TimerChallenge";

export default function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge />
        <TimerChallenge />
        <TimerChallenge />
        <TimerChallenge />
      </div>
    </>
  );
}
