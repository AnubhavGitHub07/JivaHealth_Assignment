import { Card, CardContent } from "../ui/card";
import { useUserStore } from "../../store/userStore";

const StatsCards = () => {
  const users = useUserStore((state) => state.users);

  const totalUsers = users.length;

  const primeUsers = users.filter(
    (user) => user.isPrime
  ).length;

  const nonPrimeUsers =
    totalUsers - primeUsers;

  const totalFamilyMembers = users.reduce(
    (acc, user) =>
      acc + user.familyMembers.length,
    0
  );

  const stats = [
    {
      title: "Total Users",
      value: totalUsers,
    },
    {
      title: "Prime Users",
      value: primeUsers,
    },
    {
      title: "Non-Prime Users",
      value: nonPrimeUsers,
    },
    {
      title: "Total Family Members",
      value: totalFamilyMembers,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card
          key={stat.title}
         className="rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              {stat.title}
            </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-emerald-600 tracking-tight">
              {stat.value}
            </h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;