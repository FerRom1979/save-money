import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/login/Login";
import Register from "../../pages/start/Register";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routing;
