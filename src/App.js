import React, { useState } from "react";
import TodoTemplate from "./chapter10/TodoTemplate";
import TodoInsert from "./chapter10/TodoInsert";
import TodoList from "./chapter10/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 기초 알아보기", checked: true },
    { id: 2, text: "컴포넌트 스타일링해 보기", checked: true },
    { id: 3, text: "일정 관리 앱 만들어 보기", checked: false },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
