import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../../pages/start/Register";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  );
};

export default Routing;
