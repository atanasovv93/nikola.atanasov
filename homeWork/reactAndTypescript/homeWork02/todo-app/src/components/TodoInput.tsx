import React, { useState } from "react";
import "./TodoInput.css";

interface TodoInputProps {
  onAdd: (description: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [input, setInput] = useState<string>("");

  const handleAdd = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setInput("");
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        placeholder="Add new Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input-field"
      />
      <button onClick={handleAdd} className="todo-input-button">
        Create Todo
      </button>
    </div>
  );
};

export default TodoInput;
