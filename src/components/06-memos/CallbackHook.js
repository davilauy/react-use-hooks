import React, { useState, useCallback } from "react";

import "./styles.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (arg) => {
      setCounter((counter) => counter + arg);
    },
    [setCounter]
  );

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
