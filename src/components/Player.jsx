import { useState, useRef } from 'react';

export default function Player() {

  const inputRef = useRef(null);

  const [playerName, setPlayerName] = useState(null);
  

  function handleClick(){
    console.log(inputRef.current.value);
    setPlayerName(inputRef.current.value);
    inputRef.current.value = '';
  }


  return (
    <section id="player">
      <h2>Welcome { playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref= {inputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
