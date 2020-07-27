import React, { useState } from "react";
import "./counter.css";

export const CounterApp = () => {
  const [state, setState] = useState({
    counterUno: 10,
    counterDos: 20,
  });

  const { counterUno, counterDos } = state;

  return (
    <>
      <h1>Counter {counterUno}</h1>
      <h1>Counter {counterDos}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setState({
            ...state,
            counterUno: counterUno + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
