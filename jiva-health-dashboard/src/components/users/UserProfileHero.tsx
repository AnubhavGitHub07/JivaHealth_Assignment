import { useState } from "react";
import type { User } from "../../types/user.types";
import { Badge } from "../ui/badge";
import { ArrowLeft, Calendar, Activity, Crown, ChevronDown, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/userStore";

interface UserProfileHeroProps {
  user: User;
}

const UserProfileHero = ({
  user,
}: UserProfileHeroProps) => {
  const navigate = useNavigate();
  const updateUserStatus = useUserStore((state) => state.updateUserStatus);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const initials = user.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div>
      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition mb-5 text-sm font-medium cursor-pointer"
      >
        <ArrowLeft size={16} />
        Back to User Management
      </button>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
          {/* Left: Avatar + Info */}
          <div className="flex items-start gap-4 sm:gap-5">
            {/* Avatar */}
            <div className="h-14 w-14 sm:h-[72px] sm:w-[72px] rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center text-xl sm:text-2xl font-bold shrink-0 shadow-2xs">
              {initials}
            </div>

            {/* User Info */}
            <div className="space-y-2">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                {user.name}
              </h1>

              {/* Tags row */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <Badge
                  className={
                    user.status === "Active"
                      ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-emerald-100 text-xs font-semibold px-2 py-0.5"
                      : "bg-rose-50 text-rose-700 hover:bg-rose-50 border-rose-100 text-xs font-semibold px-2 py-0.5"
                  }
                >
                  {user.status}
                </Badge>

                <Badge variant="secondary" className="text-xs font-medium bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-50 px-2 py-0.5">
                  {user.role}
                </Badge>

                <Badge
                  variant="secondary"
                  className={
                    user.isPrime
                      ? "text-xs font-semibold bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-50 px-2 py-0.5"
                      : "text-xs font-medium bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-50 px-2 py-0.5"
                  }
                >
                  {user.isPrime ? "Prime User" : "Normal User"}
                </Badge>

                <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200/60">
                  ID: #{user.id}
                </span>
              </div>

              {/* Dates row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-slate-500">
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <Calendar size={14} className="text-slate-400 shrink-0" />
                  Joined {user.joinedDate}
                </span>
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <Activity size={14} className="text-slate-400 shrink-0" />
                  Last active {user.lastActive}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full xl:w-auto mt-4 xl:mt-0 pt-4 xl:pt-0 border-t border-slate-100 xl:border-t-0">
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl h-10 px-5 text-sm font-semibold shadow-xs transition-all active:scale-[0.98] cursor-pointer w-full sm:w-auto">
              <Crown size={16} />
              Upgrade to Prime
            </button>

            {/* Styled Custom Status Dropdown */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between gap-2 h-10 px-4 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700 cursor-pointer hover:bg-slate-50 transition w-full sm:min-w-[120px] shadow-2xs"
              >
                <span className="flex items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${user.status === "Active" ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}`} />
                  {user.status}
                </span>
                <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
              </button>

              {isDropdownOpen && (
                <>
                  {/* Backdrop overlay */}
                  <div
                    className="fixed inset-0 z-40 cursor-default"
                    onClick={() => setIsDropdownOpen(false)}
                  />

                  {/* Dropdown Card */}
                  <div className="absolute right-0 left-0 sm:left-auto mt-1.5 w-full sm:w-[160px] bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in-0 slide-in-from-top-1 duration-100">
                    <button
                      type="button"
                      onClick={() => {
                        updateUserStatus(user.id, "Active");
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2 text-sm text-left font-medium transition cursor-pointer ${
                        user.status === "Active"
                          ? "bg-slate-50 text-slate-800"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Active
                      </span>
                      {user.status === "Active" && (
                        <Check className="h-4 w-4 text-slate-800 shrink-0" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        updateUserStatus(user.id, "Inactive");
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2 text-sm text-left font-medium transition cursor-pointer ${
                        user.status === "Inactive"
                          ? "bg-slate-50 text-slate-800"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                        Inactive
                      </span>
                      {user.status === "Inactive" && (
                        <Check className="h-4 w-4 text-slate-800 shrink-0" />
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileHero;