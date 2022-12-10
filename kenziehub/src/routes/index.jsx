import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboard";
import LoginPage from "../pages/login";
import NotFound from "../pages/notPage";
import RegisterPage from "../pages/register";

const RoutesMain = () => {
  const [user, setUser] = useState(null);
  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route
        path="/home"
        element={<DashboardPage user={user} setUser={setUser} />}
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesMain;
