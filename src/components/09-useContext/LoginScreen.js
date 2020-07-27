import React, { useContext } from "react";
import "./styles.css";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  return (
    <>
      <h1>Login Screen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 123,
            name: "Daniel Avila",
          })
        }
      >
        Login
      </button>
      <button className="btn btn-warning ml-2" onClick={() => setUser({})}>
        Logout
      </button>
    </>
  );
};
