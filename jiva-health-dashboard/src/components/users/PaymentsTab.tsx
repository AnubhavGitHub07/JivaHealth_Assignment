import type { User } from "../../types/user.types";
import { CreditCard } from "lucide-react";

interface PaymentsTabProps {
  user: User;
}

const PaymentsTab = ({ user }: PaymentsTabProps) => {
  if (user.payments.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-8 text-center text-slate-400">
        No payment records found.
      </div>
    );
  }

  // Format date to display like "March 28, 2026"
  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <h2 className="text-lg font-semibold text-slate-900 mb-6">
        Payment History
      </h2>

      <div className="flex flex-col gap-4">
        {user.payments.map((payment) => {
          // Mock subtitle details to replicate the Figma design exactly
          const isConsultation = payment.title.toLowerCase().includes("consult");
          const subtitle = isConsultation
            ? "Paracetamol 500mg - 30 tablets"
            : "Paracetamol 500mg - 30 capsules";
          
          const originalPrice = "₹250.00";

          return (
            <div
              key={payment.id}
              className="flex items-center justify-between bg-[#F8FAFC] border border-[#F1F3F5] rounded-[16px] p-4 md:p-5 transition-all duration-300 hover:shadow-sm"
            >
              {/* Left: Icon + Text details */}
              <div className="flex items-center gap-4">
                {/* Icon Box */}
                <div className="h-12 w-12 rounded-[12px] bg-[#E6F4EA] text-[#137333] flex items-center justify-center shrink-0">
                  <CreditCard size={22} />
                </div>

                {/* Text */}
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-slate-800 text-[15px] md:text-base leading-tight">
                      {payment.title}
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-[#E6F4EA] text-[#137333]">
                      {payment.status}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 mt-1">
                    {subtitle}
                  </p>

                  <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-400 font-medium">
                    <span>{formatDate(payment.date)}</span>
                    <span>{originalPrice}</span>
                  </div>
                </div>
              </div>

              {/* Right: Payment Amount */}
              <div className="text-right shrink-0">
                <span className="text-base md:text-lg font-semibold text-slate-800">
                  ₹ {payment.amount.toFixed(2)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentsTab;