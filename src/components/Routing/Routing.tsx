import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/login/Login";
import RegisterContainer from "../../pages/start/RegisterContainer";
import SingUp from "../../pages/singUp/SingUp";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterContainer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SingUp />} />
    </Routes>
  );
};

export default Routing;
