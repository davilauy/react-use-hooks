import React, { useContext } from "react";
import "./styles.css";
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>About Screen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
