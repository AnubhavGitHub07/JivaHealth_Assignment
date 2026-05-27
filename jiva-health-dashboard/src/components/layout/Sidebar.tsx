import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex w-[257px] bg-white border-r border-slate-100 h-screen sticky top-0 flex-col shrink-0">
      <SidebarContent />
    </aside>
  );
};

export default Sidebar;