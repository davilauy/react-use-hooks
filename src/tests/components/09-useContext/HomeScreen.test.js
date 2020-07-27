import React from "react";

import "@testing-library/jest-dom";
import { mount } from "enzyme";

import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Prueba en componente <HomeScreen />", () => {
  const user = {
    name: "Daniel",
    email: "daniel@danielavila.org",
  };

  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <HomeScreen />
    </UserContext.Provider>
  );

  test("Debe de renderizar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de renderizar la informacion del user ", () => {
    expect(wrapper.find("pre").text().trim()).toEqual(
      JSON.stringify(user, null, 3)
    );
  });
});
