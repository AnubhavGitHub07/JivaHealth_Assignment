import { useNavigate } from "react-router-dom";
import type { User } from "../../types/user.types";
import {
  Mail,
  Phone,
  Eye,
  Pencil,
  Calendar,
  Crown,
} from "lucide-react";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const navigate = useNavigate();

  // Get initials for Avatar
  const initials = user.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Dynamic Avatar color class based on role
  const avatarColors =
    user.role === "Nurse"
      ? "bg-purple-50 text-purple-700 border-purple-100"
      : "bg-blue-50 text-blue-700 border-blue-100";

  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.015)] p-4 sm:p-5 transition-all duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.03)] hover:border-slate-300/80">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 xl:gap-0">
        
        {/* Left Column: Avatar + Name + Badges */}
        <div className="flex items-center gap-4 xl:w-[24%] xl:shrink-0 min-w-0">
          {/* Avatar */}
          <div className={`h-12 w-12 rounded-full border flex items-center justify-center text-base font-bold shrink-0 shadow-2xs ${avatarColors}`}>
            {initials}
          </div>
          
          {/* Name & Badges */}
          <div className="flex flex-col min-w-0">
            <h3 className="font-bold text-slate-800 text-base sm:text-lg leading-tight truncate">
              {user.name}
            </h3>
            
            {/* Badges in a single row wrap */}
            <div className="flex items-center gap-1.5 flex-wrap mt-1">
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-50 border border-slate-200 text-slate-600">
                {user.role}
              </span>
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold border ${
                  user.status === "Active"
                    ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                    : "bg-rose-50 border-rose-100 text-rose-700"
                }`}
              >
                {user.status}
              </span>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold border ${
                user.isPrime
                  ? "bg-amber-50 border-amber-100 text-amber-700 font-semibold"
                  : "bg-slate-50 border border-slate-200 text-slate-500"
              }`}>
                {user.isPrime ? "Prime User" : "Normal User"}
              </span>
            </div>
          </div>
        </div>

        {/* Email & Phone Column */}
        <div className="flex flex-col gap-1.5 text-xs text-slate-500 xl:w-[22%] xl:shrink-0 min-w-0 border-t xl:border-t-0 border-slate-100/80 pt-4 xl:pt-0 mt-2 xl:mt-0">
          <div className="flex items-center gap-2 truncate">
            <Mail className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{user.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span>{user.phone}</span>
          </div>
        </div>

        {/* Joined Date & Appointments Subgrid */}
        <div className="grid grid-cols-2 gap-4 bg-slate-50/60 rounded-xl p-3 border border-slate-100/80 xl:w-[24%] xl:shrink-0 xl:bg-transparent xl:border-0 xl:p-0 border-t xl:border-t-0 pt-4 xl:pt-0 mt-2 xl:mt-0">
          {/* Joined Date */}
          <div className="flex flex-col text-xs text-slate-500">
            <div className="flex items-center gap-1.5 text-slate-400 mb-0.5">
              <Calendar className="h-3.5 w-3.5 shrink-0" />
              <span>Joined</span>
            </div>
            <div className="font-semibold text-slate-700">
              {user.joinedDate}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">
              Active: {user.lastActive}
            </div>
          </div>

          {/* Appointments */}
          <div className="flex flex-col justify-center">
            <span className="text-xs text-slate-400">Appointments</span>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold text-blue-600">
                {user.appointmentsCount}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 bg-blue-50 border border-blue-100 px-1 py-0.5 rounded font-bold">
                Booked
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Action Buttons */}
        <div className="flex items-center gap-2 w-full xl:w-[30%] xl:shrink-0 mt-4 xl:mt-0 pt-4 xl:pt-0 border-t xl:border-t-0 border-slate-100/80 justify-end">
          {!user.isPrime && (
            <button className="flex-1 xl:flex-initial inline-flex items-center justify-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white h-9 px-3.5 rounded-lg text-xs font-semibold shadow-2xs transition-all active:scale-[0.98] cursor-pointer">
              <Crown className="h-3.5 w-3.5 shrink-0" />
              Upgrade to Prime
            </button>
          )}
          
          <button
            onClick={() => navigate(`/users/${user.id}`)}
            className="flex-1 xl:flex-initial inline-flex items-center justify-center gap-1.5 border border-slate-200 hover:bg-slate-50 text-slate-700 h-9 px-3.5 rounded-lg text-xs font-semibold transition-all cursor-pointer active:scale-[0.98]"
          >
            <Eye className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            View
          </button>
          
          <button className="flex-1 xl:flex-initial inline-flex items-center justify-center gap-1.5 border border-slate-200 hover:bg-slate-50 text-slate-700 h-9 px-3.5 rounded-lg text-xs font-semibold transition-all cursor-pointer active:scale-[0.98]">
            <Pencil className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            Edit
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserCard;