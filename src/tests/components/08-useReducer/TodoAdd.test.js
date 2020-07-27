import React from "react";

import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe("Prueba en componente <TodoAdd />", () => {
  const handleAddTodo = jest.fn();

  test("Debe de renderizar el componente correctamente ", () => {
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    expect(wrapper).toMatchSnapshot();
  });
});
