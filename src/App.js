import React from "react";
import ColorBox from "./chapter15/components/ColorBox";
import { ColorProvider } from "./chapter15/contexts/color";
import SelectColors from "./chapter15/components/SelectColors";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
