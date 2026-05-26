import type { User } from "../../types/user.types";
import { Card, CardContent } from "../ui/card";

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
      color: "text-emerald-600",
    },
    {
      title: "Appointments",
      value: user.appointmentsCount,
      color: "text-blue-600",
    },
    {
      title: "Family Members",
      value: user.familyMembers.length,
      color: "text-orange-500",
    },
    {
      title: "Total Spent",
      value: `₹${user.totalSpent}`,
      color: "text-violet-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <Card
          key={metric.title}
          className="rounded-[28px] border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">
              {metric.title}
            </p>

            <h2
              className={`text-3xl md:text-4xl font-bold mt-4 tracking-tight ${metric.color}`}
            >
              {metric.value}
            </h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserMetrics;