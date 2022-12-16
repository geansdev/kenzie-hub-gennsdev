import { Routes, Route } from "react-router-dom";
import DashInContext from "../contexts/dashInContext";
import LoginPage from "../pages/login";
import NotFound from "../pages/notPage";
import RegisterPage from "../pages/register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<DashInContext />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesMain;
