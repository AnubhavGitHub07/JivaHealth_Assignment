import type { User } from "../../types/user.types";
import { Badge } from "../ui/badge";
import { ArrowLeft, Calendar, Activity, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UserProfileHeroProps {
  user: User;
}

const UserProfileHero = ({
  user,
}: UserProfileHeroProps) => {
  const navigate = useNavigate();

  const initials = user.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div>
      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition mb-6 text-sm font-medium"
      >
        <ArrowLeft size={16} />
        Back to User Management
      </button>

      {/* Profile row */}
      <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6">
        {/* Left: Avatar + Info */}
        <div className="flex items-start gap-5">
          {/* Avatar */}
          <div className="h-[72px] w-[72px] rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl font-bold shrink-0">
            {initials}
          </div>

          {/* User Info */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              {user.name}
            </h1>

            {/* Tags row */}
            <div className="flex items-center gap-2 flex-wrap">
              <Badge
                className={
                  user.status === "Active"
                    ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-emerald-200 text-xs font-medium"
                    : "bg-red-100 text-red-700 hover:bg-red-100 border-red-200 text-xs font-medium"
                }
              >
                {user.status}
              </Badge>

              <Badge variant="secondary" className="text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-100">
                {user.role}
              </Badge>

              <Badge variant="secondary" className="text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-100">
                {user.isPrime ? "Prime User" : "Normal User"}
              </Badge>

              <span className="text-sm text-slate-500">
                ID: #{user.id}
              </span>
            </div>

            {/* Dates row */}
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-slate-400" />
                Joined {user.joinedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Activity size={14} className="text-slate-400" />
                Last active {user.lastActive}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg h-10 px-5 text-sm font-medium transition">
            <Crown size={16} />
            Upgrade to Prime
          </button>

          <select
            defaultValue={user.status}
            className="h-10 px-4 pr-8 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center' }}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserProfileHero;