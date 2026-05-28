import type { User } from "../../types/user.types";
import {
  Mail,
  Phone,
  Calendar,
  User as UserIcon,
  Heart,
  Pencil,
} from "lucide-react";

interface PersonalInfoCardProps {
  user: User;
}

const formatDate = (dateStr?: string) => {
  if (!dateStr) return "-";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const PersonalInfoCard = ({
  user,
}: PersonalInfoCardProps) => {
  const infoItems = [
    {
      label: "Email:",
      value: user.email,
      icon: Mail,
    },
    {
      label: "Phone:",
      value: user.phone,
      icon: Phone,
    },
    {
      label: "Date of Birth:",
      value: formatDate(user.dob),
      icon: Calendar,
    },
    {
      label: "Gender:",
      value: user.gender || "-",
      icon: UserIcon,
    },
    {
      label: "Blood Group:",
      value: user.bloodGroup || "-",
      icon: Heart,
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Personal Information
        </h2>
        <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl px-3 py-1.5 hover:bg-slate-50 transition cursor-pointer">
          <Pencil size={14} />
          Edit
        </button>
      </div>

      {/* Info rows */}
      <div className="divide-y divide-slate-100">
        {infoItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center gap-3 py-4 first:pt-0 last:pb-0"
            >
              <Icon size={18} className="text-slate-700 shrink-0" />
              <span className="text-sm text-emerald-600 font-medium w-32 shrink-0">
                {item.label}
              </span>
              <span className="text-sm text-slate-800 font-medium">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalInfoCard;