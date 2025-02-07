import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "countChange":
      return { ...state, count: action.payload };
    case "stepChange":
      return { ...state, step: action.payload };
    default:
      throw new Error("Not a valid action");
  }
}

export default function Counter() {
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  const increment = function () {
    dispatch({ type: "inc" });
  };
  const decrement = function () {
    dispatch({ type: "dec" });
  };
  const onCountChange = function (e) {
    dispatch({ type: "countChange", payload: Number(e.target.value) });
  };
  const onStepChange = function (e) {
    dispatch({ type: "stepChange", payload: Number(e.target.value) });
  };
  return (
    <>
      <input
        type="range"
        min="1"
        max="100"
        value={step}
        onChange={onStepChange}
      />
      <br />
      <button onClick={decrement}>-</button>
      <input value={count} onChange={onCountChange} />
      <button onClick={increment}>+</button>
    </>
  );
}
