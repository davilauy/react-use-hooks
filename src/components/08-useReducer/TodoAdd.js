import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };
  return (
    <>
      <h4>Agregar tarea</h4>
      <hr />
      <form>
        <input
          value={description}
          onChange={handleInputChange}
          type="text"
          name="description"
          className="form-control"
          placeholder="Tarea por hacer"
          autoComplete="false"
        />
        <button
          className="btn btn-outline-primary mt-1 btn-block"
          onClick={handleSubmit}
        >
          Agregar
        </button>
      </form>
    </>
  );
};
