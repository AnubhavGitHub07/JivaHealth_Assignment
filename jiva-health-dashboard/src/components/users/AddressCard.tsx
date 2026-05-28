import type { User } from "../../types/user.types";
import { Home, Briefcase, Plus, SquarePen, Trash2 } from "lucide-react";

interface AddressCardProps {
  user: User;
}

const AddressCard = ({
  user,
}: AddressCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Addresses
        </h2>
        <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl px-3 py-1.5 hover:bg-slate-50 transition cursor-pointer">
          <Plus size={14} />
          Add
        </button>
      </div>

      {/* Address list */}
      <div className="space-y-4">
        {user.addresses.map((address) => {
          const isHome = address.type === "Home";
          const Icon = isHome ? Home : Briefcase;
          return (
            <div
              key={address.id}
              className="flex items-start justify-between gap-4 border border-slate-200/80 rounded-2xl p-5"
            >
              <div className="flex items-start gap-4">
                {/* Home/Work icon */}
                <div className="h-10 w-10 rounded-xl bg-[#E6F4EA] flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-[#137333]" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-slate-800">
                      {address.type}
                    </h3>
                    {address.isDefault && (
                      <span className="bg-[#E6F4EA] text-[#137333] px-2 py-0.5 rounded text-xs font-semibold">
                        Default
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    {address.addressLine}
                    <br />
                    {address.city}, {address.state} {address.pincode}
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button className="text-slate-700 hover:text-slate-900 transition p-1.5 cursor-pointer">
                  <SquarePen size={18} />
                </button>
                <button className="text-red-500 hover:text-red-700 transition p-1.5 cursor-pointer">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddressCard;