import React, { useState } from "react";
import "./App.css";
// importing components
import Form from "./components/form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>My ToDoList</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
