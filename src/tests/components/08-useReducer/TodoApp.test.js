import React from "react";

import "@testing-library/jest-dom";
import { shallow, mount } from "enzyme";
import { act } from "@testing-library/react";

import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en componente <TodoApp />", () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => {});

  test("Debe de renderizar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de agregar un todo ", () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[1]);
    });

    expect(wrapper.find("h1").text().trim()).toBe("Todo App: (2)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("Debe de eliminar un todo ", () => {
    wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
    expect(wrapper.find("h1").text().trim()).toBe("Todo App: (1)");

    wrapper.find("TodoList").prop("handleDelete")(1);
    expect(wrapper.find("h1").text().trim()).toBe("Todo App: (0)");
  });
});
