import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login.jsx";
import MainPage from "../pages/MainPage.jsx";
import Config from "../pages/Config.jsx";
import Orders from "../pages/Orders.jsx";
import Inventory from "../pages/Inventory.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/config" element={<Config />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/inventory" element={<Inventory />} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
