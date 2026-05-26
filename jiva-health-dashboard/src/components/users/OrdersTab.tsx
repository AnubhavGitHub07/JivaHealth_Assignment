import type { User } from "../../types/user.types";
import {
  Card,
  CardContent,
} from "../ui/card";
import { Badge } from "../ui/badge";

interface OrdersTabProps {
  user: User;
}

const OrdersTab = ({
  user,
}: OrdersTabProps) => {
  return (
    <div className="space-y-6">
      {user.orders.map((order) => (
        <Card
          key={order.id}
          className="rounded-[28px] border border-slate-200 shadow-sm"
        >
          <CardContent className="p-6">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  
                  <h3 className="text-xl font-semibold">
                    Order #{order.id}
                  </h3>

                  <Badge
                    className={
                      order.status === "Delivered"
                        ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                        : "bg-orange-100 text-orange-700 hover:bg-orange-100"
                    }
                  >
                    {order.status}
                  </Badge>
                </div>

                <p className="text-slate-600 mt-3">
                  {order.title}
                </p>

                <p className="text-sm text-slate-500 mt-2">
                  {order.date}
                </p>
              </div>

              <div className="text-3xl font-bold text-slate-900">
                ₹{order.amount}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OrdersTab;