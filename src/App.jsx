import Player from "./Components/Player";
import TimeChallenge from "./Components/TimeChallenge";

export default function App() {
  return (
    <>
      <Player />
      <TimeChallenge title={"easy"} targetTime={1} />
      <TimeChallenge title={"not easy"} targetTime={5} />
      <TimeChallenge title={"getting  tough"} targetTime={10} />
      <TimeChallenge title={"pros only"} targetTime={15} />
    </>
  );
}
