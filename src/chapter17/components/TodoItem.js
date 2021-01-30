import React from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>예제 테스트</span>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
