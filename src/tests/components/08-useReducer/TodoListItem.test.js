import React from "react";

import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en componente <TodoListItem />", () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();
  const index = 0;

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={index}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );

  test("Debe de renderizar el componente correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de llamar a la funcion handleDelete ", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("Debe de llamar a la funcion handleToggle ", () => {
    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("Debe de mostrar el texto correctamente ", () => {
    const text = wrapper.find("p").text();
    expect(text.trim()).toBe(`${index + 1}. ${demoTodos[0].desc}`);
  });

  test("Debe de tener la clase complete si el todo.done es true ", () => {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        index={index}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    );

    expect(wrapper.find("p").hasClass("complete")).toBeTruthy();
  });
});
