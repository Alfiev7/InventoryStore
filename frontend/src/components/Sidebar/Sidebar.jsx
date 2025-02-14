import sidebarData from "./SideBarData";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 m-0 gap-6 flex flex-col bg-gray-100 shadow-lg pt-10">
      {sidebarData.map(({ to, icon }, index) => (
        <SidebarItem key={index} to={to} icon={icon} />
      ))}
      <div>
        This is a test
        <a href="/test">Test</a>
      </div>
    </div>
  );
}
