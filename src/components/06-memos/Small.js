import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Lanza Small");
  return <small>{value}</small>;
});
