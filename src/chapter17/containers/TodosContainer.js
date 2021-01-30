import React from "react";
import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from "../actions/todos";
import Todos from "../components/Todos";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

const mapStateToProps = (state) => ({
  input: state.todos.input,
  todos: state.todos.todos,
});

const mapDispatchToProps = {
  changeInput,
  insert,
  toggle,
  remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
