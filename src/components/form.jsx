import React, { useRef } from "react";

const Form = ({ setTodos, todos }) => {
  const inputRef = useRef();

  const submitTodoHandler = (todo) => {
    todo.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputRef.current.value,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    inputRef.current.value = "";
  };

  return (
    <form>
      <input ref={inputRef} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
