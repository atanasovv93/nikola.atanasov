import React from "react";

interface Todo {
  id: number;
  description: string;
  isDone: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onFinish: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onFinish }) => {
  const { id, description, isDone } = todo;

  return (
    <li
      style={{
        padding: "0.75rem 1rem",
        marginBottom: "0.5rem",
        border: isDone ? "2px solid green" : "1px solid #ccc",
        borderRadius: 4,
        backgroundColor: isDone ? "#e6ffe6" : "#f9f9f9",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: isDone ? "green" : "black",
        fontWeight: isDone ? "bold" : "normal",
      }}
    >
      <span>{description}</span>
      {!isDone && (
        <button
          onClick={() => onFinish(id)}
          style={{
            cursor: "pointer",
            backgroundColor: "green",
            color: "white",
            border: "none",
            padding: "0.3rem 0.7rem",
            borderRadius: 3,
          }}
        >
          FINISH
        </button>
      )}
    </li>
  );
};

export default TodoItem;
