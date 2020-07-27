import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coors, setCoors] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      const coors = {
        x: e.x,
        y: e.y,
      };
      setCoors(coors);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <h3>Hola!</h3>
      {JSON.stringify(coors)}
    </>
  );
};
