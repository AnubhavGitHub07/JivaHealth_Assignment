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

const formatDate = (dateStr?: string) => {
  if (!dateStr) return "-";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const getAvatarBg = (id: number) => {
  const colors = [
    "bg-[#1A73E8] text-white border-[#1A73E8]", // Blue
    "bg-[#5C6BC0] text-white border-[#5C6BC0]", // Indigo
    "bg-[#00BFA5] text-white border-[#00BFA5]", // Teal
    "bg-[#7E57C2] text-white border-[#7E57C2]", // Purple
  ];
  return colors[(id - 1) % colors.length];
};

const UserCard = ({ user }: UserCardProps) => {
  const navigate = useNavigate();

  // Get initials for Avatar
  const initials = user.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const avatarColor = getAvatarBg(user.id);

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs transition-all duration-300 hover:shadow-sm">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 xl:gap-0">
        
        {/* Column 1: Avatar + Name + Badges */}
        <div className="flex items-center gap-4 xl:w-[22%] xl:shrink-0 min-w-0">
          {/* Avatar */}
          <div className={`h-12 w-12 rounded-full border flex items-center justify-center text-sm font-bold shrink-0 ${avatarColor}`}>
            {initials}
          </div>
          
          {/* Name & Badges */}
          <div className="flex flex-col min-w-0">
            <h3 className="font-bold text-slate-800 text-base leading-tight truncate">
              {user.name}
            </h3>
            
            <div className="flex items-center gap-1.5 mt-1">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold border ${
                user.role === "Nurse"
                  ? "bg-purple-50 border-purple-100 text-purple-700"
                  : "bg-blue-50 border-blue-100 text-blue-700"
              }`}>
                {user.role}
              </span>
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold border ${
                  user.status === "Active"
                    ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                    : "bg-rose-50 border-rose-100 text-rose-700"
                }`}
              >
                {user.status}
              </span>
            </div>
            <div className="mt-1">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-50 border border-slate-200 text-slate-500">
                {user.role === "Nurse" ? "Support Staff" : "Normal User"}
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: Email & Phone */}
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

        {/* Column 3: Joined Date & Active */}
        <div className="flex flex-col text-xs text-slate-500 xl:w-[15%] xl:shrink-0 border-t xl:border-t-0 border-slate-100/80 pt-4 xl:pt-0 mt-2 xl:mt-0 justify-center">
          <div className="flex items-center gap-1.5 text-slate-400 mb-0.5">
            <Calendar className="h-3.5 w-3.5 shrink-0" />
            <span>Joined</span>
          </div>
          <div className="font-semibold text-slate-700 text-sm">
            {formatDate(user.joinedDate)}
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">
            Last: {user.lastActive}
          </div>
        </div>

        {/* Column 4: Appointments */}
        <div className="flex flex-col text-xs text-slate-500 xl:w-[12%] xl:shrink-0 border-t xl:border-t-0 border-slate-100/80 pt-4 xl:pt-0 mt-2 xl:mt-0 justify-center">
          <span className="text-slate-400 mb-0.5 font-medium">Appointments</span>
          <span className="text-2xl font-bold text-[#137333]">
            {user.appointmentsCount}
          </span>
        </div>

        {/* Column 5: Upgrade to Prime */}
        <div className="flex items-center xl:w-[16%] xl:shrink-0 border-t xl:border-t-0 border-slate-100/80 pt-4 xl:pt-0 mt-2 xl:mt-0 justify-end xl:justify-start">
          {!user.isPrime ? (
            <button className="flex-1 xl:flex-initial inline-flex items-center justify-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white h-9 px-3.5 rounded-lg text-xs font-semibold shadow-2xs transition-all active:scale-[0.98] cursor-pointer">
              <Crown className="h-3.5 w-3.5 shrink-0" />
              Upgrade to Prime
            </button>
          ) : (
            <div className="h-9 xl:block hidden" />
          )}
        </div>

        {/* Column 6: Action Buttons */}
        <div className="flex items-center gap-2 w-full xl:w-[13%] xl:shrink-0 mt-4 xl:mt-0 pt-4 xl:pt-0 border-t xl:border-t-0 border-slate-100/80 justify-end">
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