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
      bgClass: "bg-blue-50",
      iconColor: "text-blue-600",
      icon: Users,
    },
    {
      title: "Prime User",
      value: primeUsers,
      colorClass: "text-amber-600",
      bgClass: "bg-amber-50",
      iconColor: "text-amber-600",
      icon: Crown,
    },
    {
      title: "Non-Prime User",
      value: nonPrimeUsers,
      colorClass: "text-[#137333]",
      bgClass: "bg-[#E6F4EA]",
      iconColor: "text-[#137333]",
      icon: UserCheck,
    },
    {
      title: "Total Family members",
      value: totalFamilyMembers,
      colorClass: "text-slate-900",
      bgClass: "bg-[#E6F4EA]",
      iconColor: "text-[#137333]",
      icon: Heart,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {stats.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={stat.title}
            className="bg-white border border-slate-200/80 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-xs"
          >
            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-400">
                {stat.title}
              </p>
              <h2 className={`text-3xl font-bold mt-1.5 tracking-tight ${stat.colorClass}`}>
                {stat.value}
              </h2>
            </div>
            <div className={`h-11 w-11 rounded-2xl flex items-center justify-center shrink-0 ${stat.bgClass}`}>
              <IconComponent className={`h-5 w-5 ${stat.iconColor}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;