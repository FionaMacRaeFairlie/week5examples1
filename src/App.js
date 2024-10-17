import React, { useState } from "react";
import "./App.css";
import CountButtonA from "./components/CountButtonA";
import CountButtonB from "./components/CountButtonB";
import StarRating from "./components/Stars";
import InputPhrase from "./components/InputPhrase";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
       <div>
        <CountButtonA count={count} onClick={() => setCount(count + 1)} />
        <CountButtonA count={count} onClick={() => setCount(count + 1)} />
      </div>
      <div>
        <CountButtonB  count={count} onClick={handleClick} />
        <CountButtonB  count={count} onClick={handleClick} />
      </div>
      <div className="component">
        <StarRating />
      </div>
      <InputPhrase /> 
         
    </div>
  );
}

export default App;
