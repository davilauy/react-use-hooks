import React from "react";

import { useFetch } from "../../hooks/useFetch";
import "./counter.css";
import { useCounter } from "../../hooks/useCounter";

export const MultipleCustomHook = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={decrement}>
        Anterior frase
      </button>
      <button className="btn btn-primary" onClick={increment}>
        Siguiente frase
      </button>
    </>
  );
};
