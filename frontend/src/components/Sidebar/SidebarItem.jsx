import { NavLink } from "react-router-dom";

export default function SidebarItem({ to, icon: Icon }) {
  const getNavLinkActiveClass = ({ isActive }) =>
    isActive ? "sidebar-icon active" : "sidebar-icon";

  return (
    <NavLink to={to} className={getNavLinkActiveClass}>
      <Icon size="28" />
    </NavLink>
  );
}
