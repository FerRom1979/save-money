import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/Routing";
import { GlobalStyle } from "./styled-global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
