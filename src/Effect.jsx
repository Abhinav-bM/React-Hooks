import React, { useEffect, useState } from "react";

// TRYING USE EFFECT HOOK
function Effect() {
  const [count, setCounter] = useState(0);
  const [otherCount , setOtherCount] = useState(0)

//   useEffect(()=>{
//     document.title = `${count} new messages!`
//   })

//   useEffect(()=>{
//     document.title = `${count} new messages!`
//   },[])

//   useEffect(()=>{
//     document.title = `${otherCount} new messages!`
//   },[otherCount])

useEffect(()=>{
    const counter  = setInterval(()=>{
        setCounter(count + 1)
    }, 1000)

    return () =>{
        clearInterval(counter)
    }
})
  
  const increment = () =>{
    setCounter(count + 1)
  }

  return (
    <>
      <h3>{count} new messages!</h3>  
      <button onClick={increment}>Increment</button>
      <h5>Other count : {otherCount}</h5>
      <button onClick={() => setOtherCount(otherCount + 5)}>Change by 5</button>
    </>
  );
}

export default Effect;
