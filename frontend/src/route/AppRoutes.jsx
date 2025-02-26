import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login.jsx';
import MainPage from '../pages/MainPage.jsx';
import Config from '../pages/Config.jsx';
import Orders from '../pages/Orders.jsx';
import Inventory from '../pages/Inventory.jsx';
import ProtectedRoutes from './ProtectedRoutes.jsx';
import OrderDetails from '../pages/OrderDetails.jsx';
import ItemDetails from '../pages/ItemDetails.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/config" element={<Config />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:order_id" element={<OrderDetails />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/itemDetails/:item_id" element={<ItemDetails />} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
