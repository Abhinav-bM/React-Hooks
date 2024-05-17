import React, { useState } from "react";


// tried useState
function App() {
  const [details, setDetails] = useState({ count: 0, name: "" });

  const increment = () => {
    setDetails((prev) => ({
      ...prev,
      count: details.count + 1,
    }));
  };

  const decrement = () => {
    setDetails((prev) => ({
      ...prev,
      count: details.count > 0 ? details.count - 1 : 0,
    }));
  };

  const setName = (value) => {
    setDetails((prev) => ({
      ...prev,
      name: value,
    }));
  };

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h3>Count : {details.count}</h3>
      <h3>Name : {details.name}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}

export default App;
