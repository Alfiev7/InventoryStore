import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import MainPage from "./pages/MainPage.jsx";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";

export default function AppRoutes() {
  return (
    <Routes>

      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<MainPage />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
