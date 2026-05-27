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

const PersonalInfoCard = ({
  user,
}: PersonalInfoCardProps) => {
  const infoItems = [
    {
      label: "Email:",
      value: user.email,
      icon: Mail,
      iconColor: "text-emerald-600",
    },
    {
      label: "Phone:",
      value: user.phone,
      icon: Phone,
      iconColor: "text-emerald-600",
    },
    {
      label: "Date of Birth:",
      value: user.joinedDate,
      icon: Calendar,
      iconColor: "text-emerald-600",
    },
    {
      label: "Gender:",
      value: "Female",
      icon: UserIcon,
      iconColor: "text-slate-500",
    },
    {
      label: "Blood Group:",
      value: "O+",
      icon: Heart,
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Personal Information
        </h2>
        <button className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition">
          <Pencil size={14} />
          Edit
        </button>
      </div>

      {/* Info rows */}
      <div className="space-y-4">
        {infoItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center gap-3"
            >
              <Icon size={16} className={item.iconColor} />
              <span className="text-sm text-emerald-600 font-medium">
                {item.label}
              </span>
              <span className="text-sm text-slate-900 font-medium">
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