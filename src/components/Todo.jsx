import React, { useState } from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const [isActive, setActive] = useState(false);

  //events
  const deleteHandler = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const completeHandler = () => {
    todos.map((t) => {
      if (todo.id === t.id) setActive(!isActive);
    });
  };

  return (
    <div className={`todo ${isActive ? "completed" : ""}`}>
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
