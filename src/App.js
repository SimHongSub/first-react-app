import React from "react";
import CounterContainer from "./chapter17/containers/CounterContainer";
import TodosContainer from "./chapter17/containers/TodosContainer";

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
