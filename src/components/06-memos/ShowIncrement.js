import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volvi a generar");
  return (
    <button
      className="btn btn-outline-primary mt-2"
      onClick={() => increment(2)}
    >
      increment
    </button>
  );
});
