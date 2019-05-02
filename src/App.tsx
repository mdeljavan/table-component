import React from "react";
import "./App.css";
import C1 from "./components/c1";
import Context from "./Context/Context";
import C2 from "./components/c2";
import C3 from "./components/C3";

const App: React.FC = () => {

  return (
    <Context>
      <C1 />
      <C2 />
      <C3/>
    </Context>
  )
};

export default App;
