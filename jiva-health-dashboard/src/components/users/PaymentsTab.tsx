import type { User } from "../../types/user.types";
import {
  Card,
  CardContent,
} from "../ui/card";
import { Badge } from "../ui/badge";

interface PaymentsTabProps {
  user: User;
}

const PaymentsTab = ({
  user,
}: PaymentsTabProps) => {
  return (
    <div className="space-y-6">
      {user.payments.map((payment) => (
        <Card
          key={payment.id}
          className="rounded-[28px] border border-slate-200 shadow-sm"
        >
          <CardContent className="p-6">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div>
                <div className="flex items-center gap-3">
                  
                  <h3 className="text-xl font-semibold">
                    {payment.title}
                  </h3>

                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                    {payment.status}
                  </Badge>
                </div>

                <p className="text-sm text-slate-500 mt-3">
                  {payment.date}
                </p>
              </div>

              <div className="text-3xl font-bold text-slate-900">
                ₹{payment.amount}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PaymentsTab;