import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };

    case "decrease":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

function Reduce() {
  // const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "increase" });
  };

  const decrement = () => {
    dispatch({ type: "decrease" });
  };

  return (
    <div>
      <h1>Counter : {state.count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Reduce;
