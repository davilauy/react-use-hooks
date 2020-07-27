import React from "react";

import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { MultipleCustomHook } from "../../../components/03-examples/MultipleCustomHook";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock("../../../hooks/useCounter");
jest.mock("../../../hooks/useFetch");

describe("Pruebas en <MultipleCustomHook />", () => {
  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {},
  });

  test("Debe de renderizar correctamente", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHook />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar la informacion ", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Daniel",
          quote: "Hola jest",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHook />);

    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola jest");
    expect(wrapper.find("footer").text().trim()).toBe("Daniel");
  });
});
