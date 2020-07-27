const initialState = [
  {
    id: 1,
    name: "comprar algo",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "add") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  name: "vender algo",
  done: false,
};

const addTodoAction = {
  type: "add",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
