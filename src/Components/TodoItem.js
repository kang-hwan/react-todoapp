import React from "react";
import { TodoContainer, TodoContent, Controls } from "../App.styled";

export default function TodoItem({
  isComplete = false,
  date = "",
  text = "",
  onClick,
}) {
  const completeTask = () => {
    console.log(isComplete);
    isComplete = !isComplete;
  };

  return (
    <TodoContainer>
      <TodoContent>
        <p>{text}</p>
        <p>Created At: {date}</p>
      </TodoContent>
      <Controls>
        <button onClick={completeTask}>
          {isComplete ? (
            <i className="fa-sharp fa-solid fa-repeat"></i>
          ) : (
            <i className="fa-solid fa-check"></i>
          )}
        </button>
        <button onClick={onClick}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </Controls>
    </TodoContainer>
  );
}
