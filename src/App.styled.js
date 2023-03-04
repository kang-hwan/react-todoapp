import styled from "styled-components";

const AppContainer = styled.div`
  padding: 30px 20px 45px;
  background: ivory;
  border-radius: 10px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 150px;
  box-shadow: 7px 10px;
`;

const AppHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoTitle = styled.h1`
  font-family: "Pacifico", cursive;
  margin-bottom: 0;
`;

const CreditTitle = styled.h4`
  font-family: "Pacifico", cursive;
  margin-top: 0;
  padding-bottom: 18px;
  font-size: 12px;
  border-bottom: black solid 2px;
`;

const InputContainer = styled.div`
  display: flex;
`;

const UserInputField = styled.input``;

const SubmitBtn = styled.button``;

const TodoBoard = styled.div``;

const TodoContainer = styled.div`
  button.delete-btn {
    background-color: orangered;
    padding: 5px;
  }
  button.complete-btn {
    background-color: green;
    padding: 5px;
    margin-right: 5px;
  }
`;

const TodoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 395px;
  padding-left: 5px;
  p.text {
    margin-bottom: 5px;
  }
  p.date {
    margin-top: 0px;
    font-size: small;
    color: gray;
  }
`;

const Controls = styled.div``;

export {
  AppContainer,
  LogoTitle,
  CreditTitle,
  AppHeader,
  InputContainer,
  UserInputField,
  SubmitBtn,
  TodoBoard,
  TodoContent,
  TodoContainer,
  Controls,
};
