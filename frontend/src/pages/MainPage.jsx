import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <Sidebar />
      <div className=" ml-20">
        <Outlet />
      </div>
    </div>
  );
}
