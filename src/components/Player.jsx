import { useRef ,useState} from "react";

function Player() {
  const PlayerName = useRef();
  const [enteredPlayerName,setEneteredPlayerName] = useState(null)

function handleClick(){
  setEneteredPlayerName(PlayerName.current.value)
  PlayerName.current.value = '';
}

  return (
    <section id="player">
      <h2>welcome {enteredPlayerName ??  ' unknown entity'} </h2>

      <p>
        <input type="text" ref={PlayerName}  />
        <button onClick={handleClick}>set name </button>
      </p>
    </section>
  );
  }
export default Player;

