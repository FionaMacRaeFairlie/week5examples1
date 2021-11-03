import React, { useRef } from "react";

const CustomTextInput = () => {
  const textInput = useRef();

  const focusTextInput = () =>{
    textInput.current.focus();
    console.log(textInput.current.value);
}

  return (
    <>
      <input type="text" ref={textInput} />
      <button onClick={focusTextInput}>Focus the text input</button>
    </>
  );
}
export default CustomTextInput;