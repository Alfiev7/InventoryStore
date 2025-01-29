import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import HomePage from "./pages/HomePage.jsx";



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
