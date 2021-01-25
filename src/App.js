import React from "react";
import TodoTemplate from "./chapter10/TodoTemplate";
import TodoInsert from "./chapter10/TodoInsert";

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  );
};

export default App;
