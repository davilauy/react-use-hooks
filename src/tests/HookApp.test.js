import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Prueba en <HookApp />", () => {
  test("Debe de renderizar el componente correctamente", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
