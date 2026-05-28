import type { User } from "../../types/user.types";
import { ShoppingBag, CalendarCheck, Users, CreditCard } from "lucide-react";

interface UserMetricsProps {
  user: User;
}

const UserMetrics = ({
  user,
}: UserMetricsProps) => {
  const formattedSpent = `₹${user.totalSpent.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  const metrics = [
    {
      title: "Total Orders",
      value: user.totalOrders,
      icon: ShoppingBag,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      valueColor: "text-slate-900",
    },
    {
      title: "Total Booking & Appointment",
      value: user.appointmentsCount,
      icon: CalendarCheck,
      iconBg: "bg-[#E6F4EA]",
      iconColor: "text-[#137333]",
      valueColor: "text-[#137333]",
    },
    {
      title: "Total Family Member",
      value: user.familyMembers.length,
      icon: Users,
      iconBg: "bg-[#E6F4EA]",
      iconColor: "text-[#137333]",
      valueColor: "text-slate-900",
    },
    {
      title: "Total Spent",
      value: formattedSpent,
      icon: CreditCard,
      iconBg: "bg-[#E6F4EA]",
      iconColor: "text-[#137333]",
      valueColor: "text-slate-900",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.title}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 flex items-center justify-between gap-4 shadow-xs"
          >
            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-400">
                {metric.title}
              </p>
              <h2 className={`text-3xl font-bold mt-1.5 tracking-tight ${metric.valueColor}`}>
                {metric.value}
              </h2>
            </div>

            <div className={`h-11 w-11 rounded-2xl ${metric.iconBg} flex items-center justify-center shrink-0`}>
              <Icon size={20} className={metric.iconColor} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserMetrics;