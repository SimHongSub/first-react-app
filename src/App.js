import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./chapter10/TodoTemplate";
import TodoInsert from "./chapter10/TodoInsert";
import TodoList from "./chapter10/TodoList";

function createBulkTodos() {
  const array = [];

  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }

  return array;
}

const App = () => {
  /*const [todos, setTodos] = useState([
    { id: 1, text: "리액트 기초 알아보기", checked: true },
    { id: 2, text: "컴포넌트 스타일링해 보기", checked: true },
    { id: 3, text: "일정 관리 앱 만들어 보기", checked: false },
  ]);*/

  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
