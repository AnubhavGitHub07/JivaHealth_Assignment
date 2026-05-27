import { useState } from "react";
import { Search, Filter, ChevronDown, Check } from "lucide-react";

interface UsersToolbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusFilterChange: (value: string) => void;
  roleFilter: string;
  onRoleFilterChange: (value: string) => void;
}

const UsersToolbar = ({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  roleFilter,
  onRoleFilterChange,
}: UsersToolbarProps) => {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isRoleOpen, setIsRoleOpen] = useState(false);

  const statusOptions = ["All Status", "Active", "Inactive"];
  const roleOptions = [
    { value: "All Roles", label: "All Roles" },
    { value: "Patient", label: "Patient" },
    { value: "Nurse", label: "Nurse" },
    { value: "Support Staff", label: "Support Staff" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
      {/* Search */}
      <div className="relative w-full md:flex-1">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search by patient, doctor, or specialty..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 h-11 border border-[#E2E8F0] rounded-xl bg-white text-sm outline-none focus:border-slate-300 text-slate-700 transition"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-3 w-full md:w-auto">
        {/* Status Dropdown */}
        <div className="relative flex-1 md:flex-initial">
          <button
            type="button"
            onClick={() => {
              setIsStatusOpen(!isStatusOpen);
              setIsRoleOpen(false);
            }}
            className="w-full md:w-auto pl-9 pr-9 h-11 border border-[#E2E8F0] rounded-xl bg-white text-slate-700 text-sm font-medium outline-none cursor-pointer flex items-center justify-between gap-2 min-w-[130px] text-left hover:bg-slate-50 transition relative shadow-2xs"
          >
            <Filter
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <span>{statusFilter}</span>
            <ChevronDown size={14} className="text-slate-400 shrink-0 pointer-events-none" />
          </button>

          {isStatusOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40 cursor-default"
                onClick={() => setIsStatusOpen(false)}
              />
              {/* Dropdown Container */}
              <div className="absolute right-0 md:left-0 mt-1.5 w-[160px] bg-white border border-[#E2E8F0] rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in-0 slide-in-from-top-1 duration-100">
                {statusOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      onStatusFilterChange(opt);
                      setIsStatusOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2 text-sm text-left font-medium transition cursor-pointer ${
                      statusFilter === opt
                        ? "bg-slate-50 text-slate-800"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{opt}</span>
                    {statusFilter === opt && (
                      <Check className="h-4 w-4 text-slate-800 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Role Dropdown */}
        <div className="relative flex-1 md:flex-initial">
          <button
            type="button"
            onClick={() => {
              setIsRoleOpen(!isRoleOpen);
              setIsStatusOpen(false);
            }}
            className="w-full md:w-auto pl-9 pr-9 h-11 border border-[#E2E8F0] rounded-xl bg-white text-slate-700 text-sm font-medium outline-none cursor-pointer flex items-center justify-between gap-2 min-w-[130px] text-left hover:bg-slate-50 transition relative shadow-2xs"
          >
            <Filter
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <span>
              {roleOptions.find((o) => o.value === roleFilter)?.label || "All Roles"}
            </span>
            <ChevronDown size={14} className="text-slate-400 shrink-0 pointer-events-none" />
          </button>

          {isRoleOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40 cursor-default"
                onClick={() => setIsRoleOpen(false)}
              />
              {/* Dropdown Container */}
              <div className="absolute right-0 md:left-0 mt-1.5 w-[160px] bg-white border border-[#E2E8F0] rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in-0 slide-in-from-top-1 duration-100">
                {roleOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onRoleFilterChange(opt.value);
                      setIsRoleOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2 text-sm text-left font-medium transition cursor-pointer ${
                      roleFilter === opt.value
                        ? "bg-slate-50 text-slate-800"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {roleFilter === opt.value && (
                      <Check className="h-4 w-4 text-slate-800 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersToolbar;