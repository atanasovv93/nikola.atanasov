import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

interface Todo {
  id: number;
  description: string;
  isDone: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, description: "Walk the Dog", isDone: false },
    { id: 2, description: "Write HomeWork", isDone: false },
  ]);

  const addTodo = (desc: string) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), description: desc, isDone: false },
    ]);
  };

  const finishTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "Arial" }}>
      <h2>React Todo APP</h2>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onFinish={finishTodo} />
    </div>
  );
};

export default TodoApp;
