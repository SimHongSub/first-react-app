import React from "react";
import TodoTemplate from "./chapter10/TodoTemplate";
import TodoInsert from "./chapter10/TodoInsert";
import TodoList from "./chapter10/TodoList";

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
};

export default App;
