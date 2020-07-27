import React from "react";

import "@testing-library/jest-dom";
import { mount } from "enzyme";

import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Prueba en componente <AppRouter />", () => {
  const user = {
    name: "Daniel",
    email: "daniel@danielavila.org",
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test("Debe de renderizarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
