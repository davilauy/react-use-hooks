import React, { useState, useLayoutEffect, useRef } from "react";

import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "./layout.css";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>LayoutEffect: Breaking Bad Quotes</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={pTag}>
          {quote}
        </p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-primary mr-2" onClick={decrement}>
        Anterior frase
      </button>
      <button className="btn btn-primary" onClick={increment}>
        Siguiente frase
      </button>
    </>
  );
};
