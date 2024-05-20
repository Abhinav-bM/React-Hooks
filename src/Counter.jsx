import React, {  useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {

    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () =>{
    dispatch({type: "increment"})
  }

  const decrement = () =>{
    dispatch({type : "decrement"})
  }

  return (
    <div>
      <h1>count : {state.count} </h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default Counter;
