import React from "react";
import ColorBox from "./chapter15/components/ColorBox";
import ColorContext from "./chapter15/contexts/color";

const App = () => {
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};

export default App;
