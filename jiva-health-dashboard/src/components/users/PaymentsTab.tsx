import type { User } from "../../types/user.types";
import { Badge } from "../ui/badge";
import { CreditCard } from "lucide-react";

interface PaymentsTabProps {
  user: User;
}

const PaymentsTab = ({
  user,
}: PaymentsTabProps) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <h2 className="text-lg font-semibold text-slate-900 mb-6">
        Payment History
      </h2>

      <div className="space-y-0 divide-y divide-slate-100">
        {user.payments.map((payment) => (
          <div
            key={payment.id}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-5 first:pt-0 last:pb-0"
          >
            {/* Left: Icon + Payment details */}
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <CreditCard size={20} className="text-emerald-600" />
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-semibold text-slate-900">
                    {payment.title}
                  </h3>
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 text-xs">
                    {payment.status}
                  </Badge>
                </div>

                <div className="flex items-center gap-3 mt-1">
                  <span className="text-sm text-slate-400">
                    {payment.date}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    ₹{payment.amount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentsTab;