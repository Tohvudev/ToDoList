import React, { useState } from "react";
import TodoTable from "./TodoTable";

const TodoList = () => {
  const [todo, setTodo] = useState({ description: "", date: "" });
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (todo.description && todo.date) {
      setTodos((prevTodos) => [todo, ...prevTodos]);
      setTodo({ description: "", date: "" });
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Simple TodoList</h1>
      <h4>Add todo</h4>
      <form onSubmit={addTodo} style={{ display: "flex", gap: "1rem" }}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={todo.description}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={todo.date}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <TodoTable todos={todos} onDelete={handleDelete} />
    </>
  );
};

export default TodoList;
