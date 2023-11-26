import { useState } from 'react';

function App() {
  const [hover, setHover] = useState(false);

  function handleMouseEnter() {
    setHover(true);
  }
  function handleMouseLeave() {
    setHover(false);
  }
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: hover ? 'yellow' : 'blue',
        color: hover ? 'black' : 'white',

        fontFamily: 'system-ui',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>coding beauty</p>
    </div>
  );
}

export default App;
