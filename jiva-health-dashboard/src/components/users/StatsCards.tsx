import { useUserStore } from "../../store/userStore";
import { Users, Crown, UserCheck, Heart } from "lucide-react";

const StatsCards = () => {
  const users = useUserStore((state) => state.users);

  const totalUsers = users.length;
  const primeUsers = users.filter((user) => user.isPrime).length;
  const nonPrimeUsers = users.filter((user) => !user.isPrime).length;
  const totalFamilyMembers = users.reduce(
    (acc, user) => acc + user.familyMembers.length,
    0
  );

  const stats = [
    {
      title: "Total User",
      value: totalUsers,
      colorClass: "text-slate-900",
      bgClass: "bg-slate-50 border-slate-100",
      iconColor: "text-slate-500",
      icon: Users,
    },
    {
      title: "Prime User",
      value: primeUsers,
      colorClass: "text-amber-600",
      bgClass: "bg-amber-50 border-amber-100",
      iconColor: "text-amber-600",
      icon: Crown,
    },
    {
      title: "Non-Prime User",
      value: nonPrimeUsers,
      colorClass: "text-emerald-600",
      bgClass: "bg-emerald-50 border-emerald-100",
      iconColor: "text-emerald-600",
      icon: UserCheck,
    },
    {
      title: "Total Family members",
      value: totalFamilyMembers,
      colorClass: "text-indigo-600",
      bgClass: "bg-indigo-50 border-indigo-100",
      iconColor: "text-indigo-600",
      icon: Heart,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {stats.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={stat.title}
            className="bg-white border border-slate-200/60 rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.015)] p-4 sm:p-5 transition-all duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.03)] hover:border-slate-300"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                {stat.title}
              </p>
              <div className={`p-1.5 rounded-lg border shrink-0 ${stat.bgClass}`}>
                <IconComponent className={`h-4 w-4 ${stat.iconColor}`} />
              </div>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-bold mt-4 tracking-tight ${stat.colorClass}`}>
              {stat.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;