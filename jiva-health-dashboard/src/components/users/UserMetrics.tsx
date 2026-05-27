import type { User } from "../../types/user.types";
import { CalendarCheck, PhoneCall, Users, Wallet } from "lucide-react";

interface UserMetricsProps {
  user: User;
}

const UserMetrics = ({
  user,
}: UserMetricsProps) => {
  const metrics = [
    {
      title: "Total Orders",
      value: user.totalOrders,
      icon: CalendarCheck,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      valueColor: "text-slate-900",
    },
    {
      title: "Total Booking & Appointment",
      value: user.appointmentsCount,
      icon: PhoneCall,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      valueColor: "text-emerald-600",
    },
    {
      title: "Total Family Member",
      value: user.familyMembers.length,
      icon: Users,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-500",
      valueColor: "text-slate-900",
    },
    {
      title: "Total Spent",
      value: `₹${user.totalSpent.toFixed(2)}`,
      icon: Wallet,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      valueColor: "text-slate-900",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.title}
            className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-3"
          >
            <div className="min-w-0 flex-1 overflow-hidden">
              <p className="text-sm text-slate-500 break-words">
                {metric.title}
              </p>
              <h2 className={`text-3xl font-bold mt-2 tracking-tight ${metric.valueColor}`}>
                {metric.value}
              </h2>
            </div>

            <div className={`h-10 w-10 min-w-[40px] rounded-lg ${metric.iconBg} flex items-center justify-center`}>
              <Icon size={20} className={metric.iconColor} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserMetrics;