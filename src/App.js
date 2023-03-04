import { useState } from "react";
import "./App.css";
import {
  AppContainer,
  AppHeader,
  CreditTitle,
  LogoTitle,
  SubmitBtn,
  UserInputField,
  InputContainer,
  TodoBoard,
  TodoContent,
  TodoContainer,
} from "./App.styled";
import { v4 as uuid } from "uuid";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  // ! To add object item in 'items'
  const addItem = (e) => {
    e.preventDefault();

    const newItem = {
      key: uuid(),
      date: new Date().toLocaleString(),
      text: todo,
      isComplete: false,
    };

    setTodoList([...todoList, newItem]);
    setTodo("");
    console.log(todo);
    console.log(todoList);
  };

  const completeTodo = (key) => {
    const updatedTodoList = [...todoList].map((item) => {
      if (item.key === key) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    setTodoList(updatedTodoList);
  };

  const deleteTodo = (key) => {
    const updatedTodoList = [...todoList].filter((item) => item.key !== key);

    setTodoList(updatedTodoList);
  };

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <AppContainer>
      <AppHeader>
        <LogoTitle>MODOO TODO</LogoTitle>
        <CreditTitle>CREATED BY ROY KIM</CreditTitle>
        <InputContainer>
          <UserInputField type="text" value={todo} onChange={onChange} />
          <SubmitBtn onClick={addItem}>SUBMIT</SubmitBtn>
        </InputContainer>
      </AppHeader>
      <TodoBoard>
        {todoList.map((todoList) => (
          <TodoContainer
            className={
              todoList.isComplete ? "item-complete" : "item-incomplete"
            }
            key={todoList.key}
          >
            <TodoContent>
              <p className="text">{todoList.text}</p>
              <p className="date">Created At: {todoList.date}</p>
            </TodoContent>
            <div>
              <button
                className="complete-btn"
                onClick={() => completeTodo(todoList.key)}
              >
                {todoList.isComplete ? (
                  <i className="fa-sharp fa-solid fa-repeat"></i>
                ) : (
                  <i className="fa-solid fa-check"></i>
                )}
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteTodo(todoList.key)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </TodoContainer>
        ))}
      </TodoBoard>
    </AppContainer>
  );
}

export default App;
