import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "./components/Container";
import Routing from "./components/Routing";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routing />
      </Container>
    </BrowserRouter>
  );
}

export default App;
