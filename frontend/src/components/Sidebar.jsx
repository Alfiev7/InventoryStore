import { NavLink } from "react-router-dom";
import { FaGear, FaHouse, FaCartPlus, FaClipboardList } from "react-icons/fa6";

export default function Sidebar() {
  const getNavLinkActiveClass = ({ isActive }) =>
    isActive ? "sidebar-icon active" : "sidebar-icon";

  return (
    <div className="fixed top-0 left-0 h-screen w-20 m-0 gap-6 flex flex-col bg-gray-100 shadow-lg pt-10">
      <NavLink to="/" className={getNavLinkActiveClass}>
        <FaHouse size="28" />
      </NavLink>
      <NavLink to="/config" className={getNavLinkActiveClass}>
        <FaGear size="28" />
      </NavLink>
      <NavLink to="/orders" className={getNavLinkActiveClass}>
        <FaCartPlus size="28" />
      </NavLink>
      <NavLink to="/inventory" className={getNavLinkActiveClass}>
        <FaClipboardList size="28" />
      </NavLink>
    </div>
  );
}
