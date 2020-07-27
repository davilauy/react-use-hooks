import React, { useState, useMemo } from "react";

import "./styles.css";
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";

export const MemoHook = () => {
  const { counter, increment } = useCounter(2000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
      <h1>MemoHook</h1>
      <hr />
      <p>{memoProcesoPesado}</p>
      <h3>Counter: {counter}</h3>
      <button className="btn btn-primary mt-4 mr-2" onClick={increment}>
        increment
      </button>
      <button
        className="btn btn-outline-primary mt-4"
        onClick={() => setShow(!show)}
      >
        show / hide {JSON.stringify(show)}
      </button>
    </>
  );
};
