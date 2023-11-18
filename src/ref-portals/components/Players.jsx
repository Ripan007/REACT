import { useRef, useState } from "react";

export default function Player() {
  //  refs way
  const playerName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState(null);
  // default way
  // const [enterPlayerName, setEnterPlayerName] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(e) {
  //   setEnterPlayerName(e.target.value);
  // }
  function handleClick() {
    // setSubmitted(true);
    setEnterPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? enterPlayerName : "unknown entity"}</h2> */}
      <h2>welcome {enterPlayerName ?? "unknown entity"}</h2>
      <p>
        {/* <input type="text" onChange={handleChange} value={enterPlayerName} /> */}
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
