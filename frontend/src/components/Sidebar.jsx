import { NavLink } from "react-router-dom";
import { FaGear, FaHouse, FaCartPlus, FaClipboardList } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 m-0 gap-6 flex flex-col bg-gray-100 shadow-lg pt-10">
      <NavLink to="/" className="sidebar-icon" activeClassName="active">
        <FaHouse size="28" />
      </NavLink>
      <NavLink to="/config" className="sidebar-icon" activeClassName="active">
        <FaGear size="28" />
      </NavLink>
      <NavLink to="/orders" className="sidebar-icon" activeClassName="active">
        <FaCartPlus size="28" />
      </NavLink>
      <NavLink to="/inventory" className="sidebar-icon" activeClassName="active">
        <FaClipboardList size="28" />
      </NavLink>
    </div>
  );
}
