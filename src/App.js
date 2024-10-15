import React, { useState } from "react";
import "./App.css";
import BasicStateEx from "./basicStateExample";
import LessText from "./Lesstext";
import Numbers from "./Numbers";
import CountButtonA from "./CountButtonA";
import CountButtonB from "./CountButtonB";
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
      <BasicStateEx />
      <br></br>
      <LessText
        text={`Burning household rubbish in giant incinerators to make electricity is
        now the dirtiest way the UK generates power, BBC analysis has found.
        Nearly half of the rubbish produced in UK homes, including increasing
        amounts of plastic, is now being incinerated. Scientists warn it is a
        “disaster for the climate” - and some are calling for a ban on new
        incinerators. The BBC examined five years of data from across the
        country, and found that burning waste produces the same amount of
        greenhouse gases for each unit of energy as coal power, which was
        abandoned by the UK last month.`}
        maxLength={150}
      />
       <br></br>
      <Numbers />
      {/*<div>
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
      <Simple />
          */}
    </div>
  );
}

export default App;
