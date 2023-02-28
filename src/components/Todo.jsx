import React, { useState } from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //events
  const deleteHandler = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos();
  };

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
