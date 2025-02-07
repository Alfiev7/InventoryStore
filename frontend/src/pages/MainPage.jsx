import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <Sidebar />
      <div className="p-6 ml-20">
        <Outlet />
      </div>
    </div>
  );
}
