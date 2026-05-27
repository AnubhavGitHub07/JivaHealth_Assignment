import type { User } from "../../types/user.types";
import { Badge } from "../ui/badge";
import { CalendarCheck, Trash2 } from "lucide-react";

interface OrdersTabProps {
  user: User;
}

const OrdersTab = ({
  user,
}: OrdersTabProps) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <h2 className="text-lg font-semibold text-slate-900 mb-6">
        Order History
      </h2>

      <div className="flex flex-col gap-4">
        {user.orders.map((order) => (
          <div
            key={order.id}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#F8FAFC] border border-[#F1F3F5] rounded-[16px] p-4 md:p-5 transition-all duration-300 hover:shadow-sm"
          >
            {/* Left: Icon + Order details */}
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <CalendarCheck size={20} className="text-emerald-600" />
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-semibold text-slate-900">
                    Order #{order.id}
                  </h3>
                  <Badge
                    className={
                      order.status === "Delivered"
                        ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-emerald-100 text-xs font-semibold px-2"
                        : "bg-orange-50 text-orange-700 hover:bg-orange-50 border-orange-100 text-xs font-semibold px-2"
                    }
                  >
                    {order.status}
                  </Badge>
                </div>

                <p className="text-sm text-slate-600 mt-1">
                  {order.title}
                </p>

                <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-400 font-medium">
                  <span>{order.date}</span>
                  <span className="font-semibold text-slate-700">
                    ₹{order.amount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Status dropdown + Delete */}
            <div className="flex items-center gap-2 self-end lg:self-center">
              <div className="relative">
                <select
                  defaultValue={order.status}
                  className="h-9 pl-3 pr-8 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center' }}
                >
                  <option value="Delivered">Delivered</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>

              <button className="h-9 w-9 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition text-slate-400 hover:text-red-500 cursor-pointer">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersTab;