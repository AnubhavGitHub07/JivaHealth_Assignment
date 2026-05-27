import {
  Bell,
  Moon,
  Search,
  LayoutGrid,
  Menu,
} from "lucide-react";

interface HeaderProps {
  onMenuToggle?: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  return (
    <header className="h-16 px-4 md:px-6 border-b border-l border-slate-100 bg-white flex items-center justify-between shrink-0">
      {/* Left – Toggle icon or Hamburger on mobile */}
      <div className="flex items-center">
        <button
          onClick={onMenuToggle}
          className="lg:hidden text-slate-500 hover:text-slate-700 transition p-1.5 rounded-lg hover:bg-slate-150 cursor-pointer shrink-0 mr-2"
        >
          <Menu size={22} />
        </button>

        <button className="hidden lg:block text-slate-500 hover:text-slate-700 transition">
          <LayoutGrid size={20} />
        </button>
      </div>

      {/* Center – Search */}
      <div className="flex-1 hidden md:flex justify-center">
        <div className="relative">
          <Search
            className="absolute left-[12px] top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-[388px] h-[35px] rounded-[10px] border border-slate-300 pl-10 pr-4 outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          />
        </div>
      </div>

      {/* Mobile search spacer */}
      <div className="flex-1 md:hidden" />

      {/* Right – Actions */}
      <div className="flex items-center gap-3 shrink-0">
        <button className="h-10 w-10 rounded-xl border flex items-center justify-center hover:bg-slate-100 transition cursor-pointer">
          <Moon size={18} />
        </button>

        <button className="relative h-10 w-10 rounded-xl border flex items-center justify-center hover:bg-slate-100 transition cursor-pointer">
          <Bell size={18} />

          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            1
          </span>
        </button>

        <div className="h-11 w-11 rounded-full bg-emerald-700 text-white flex items-center justify-center font-semibold shrink-0">
          AD
        </div>
      </div>
    </header>
  );
};

export default Header;