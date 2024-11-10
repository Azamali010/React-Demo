// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/slice/counter"; // Import the actions
import Card from "./Componets/Card";
import "./Componets/Card.css"

function App() {
  // Access the current counter value from the Redux store
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch(); // To dispatch actions

  return (
    <>
    <div className="App">
      <h1>Counter App</h1>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())} // Dispatching the increment action
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())} // Dispatching the decrement action
        >
          Decrement
        </button>
        <button aria-label="xjsaxsanx"
        onClick={() =>dispatch(incrementByAmount())}
        >
          incrementByAmount
        </button>
      </div>
    </div>
    <Card/>
    </>
  );
}

export default App;
