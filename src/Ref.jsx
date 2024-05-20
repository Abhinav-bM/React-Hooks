import React,{useRef} from "react";

function Ref() {
  const inputElem = useRef();

  return (
    <div>
      <input ref={inputElem} type="text" placeholder="type something..." />
      <button onClick={()=> {inputElem.current.style.width = "500px"}}>change input</button>
    </div>
  );
}

export default Ref;
