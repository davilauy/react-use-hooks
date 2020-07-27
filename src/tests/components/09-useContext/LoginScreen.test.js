import React from "react";

import "@testing-library/jest-dom";
import { mount } from "enzyme";

import { UserContext } from "../../../components/09-useContext/UserContext";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";

describe("Pruebas en componente <LoginScreen />", () => {
  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test("Debe de renderizarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de ejecutar la funcion setUser con el argumento esperado ", () => {
    wrapper.find("button").at(0).prop("onClick")();

    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: "Daniel Avila",
    });
  });
});
