import React, { useRef } from "react";

import "./counter.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input ref={inputRef} className="form-control" placeholder="Nombre" />
      <button className="btn btn-outline-primary mt-3" onClick={handleClick}>
        Focus
      </button>
    </>
  );
};
