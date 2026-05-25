import {
  Bell,
  Moon,
  Search,
} from "lucide-react";

const Header = () => {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-8">
      {/* Search */}
      <div className="relative w-full max-w-xl">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search"
          className="w-full h-11 rounded-xl border border-slate-200 pl-10 pr-4 outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 ml-6">
        <button className="h-11 w-11 rounded-xl border flex items-center justify-center hover:bg-slate-100 transition">
          <Moon size={18} />
        </button>

        <button className="relative h-11 w-11 rounded-xl border flex items-center justify-center hover:bg-slate-100 transition">
          <Bell size={18} />

          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            1
          </span>
        </button>

        <div className="h-11 w-11 rounded-full bg-emerald-700 text-white flex items-center justify-center font-semibold">
          AD
        </div>
      </div>
    </header>
  );
};

export default Header;