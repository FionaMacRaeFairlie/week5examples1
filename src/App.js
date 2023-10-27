import React, { useState } from "react";
import "./App.css";
import CountButton from "./CountButton";
import StarRating from "./Stars";
import InputPhrase from "./InputPhrase";
import Simple from "./Simple";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <Simple />
      <CountButton count={count} onClick={handleClick} />
      <CountButton count={count} onClick={() => setCount(count + 1)} />
      <div className="component">
        <StarRating />
      </div>
      <InputPhrase />
    </div>
  );
}

export default App;
