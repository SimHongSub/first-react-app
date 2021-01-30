import React from "react";
import Counter from "./chapter17/components/Counter";
import Todos from "./chapter17/components/Todos";

const App = () => {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
