import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LadingPage";
import Login from "../pages/Login";
import Registro from "../pages/Registro";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registro" element={<Registro />} />

    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>
);

export default RoutesMain;
