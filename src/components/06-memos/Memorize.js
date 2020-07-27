import React, { useState } from "react";

import "./styles.css";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Memorize</h1>
      <hr />
      <h3>
        Counter: <Small value={counter} />
      </h3>
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
