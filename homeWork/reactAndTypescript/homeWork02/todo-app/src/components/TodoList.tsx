import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  description: string;
  isDone: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onFinish: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onFinish }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onFinish={onFinish} />
      ))}
    </ul>
  );
};

export default TodoList;
