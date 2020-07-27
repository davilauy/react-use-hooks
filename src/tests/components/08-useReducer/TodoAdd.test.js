import React from "react";

import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe("Prueba en componente <TodoAdd />", () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test("Debe de renderizar el componente correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("No debe de llamar a la funcion handleAddTodo ", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("Debe de llamar la funcion handleAddTodo con un argumento", () => {
    const text = "hola mundo";

    wrapper.find("input").simulate("change", {
      target: {
        value: text,
        name: "description",
      },
    });

    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalled();
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: text,
      done: false,
    });

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
