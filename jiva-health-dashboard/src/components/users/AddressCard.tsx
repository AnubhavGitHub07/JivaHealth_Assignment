import type { User } from "../../types/user.types";
import { Badge } from "../ui/badge";
import { Home, Plus, Pencil, Trash2 } from "lucide-react";

interface AddressCardProps {
  user: User;
}

const AddressCard = ({
  user,
}: AddressCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Addresses
        </h2>
        <button className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition">
          <Plus size={14} />
          Add
        </button>
      </div>

      {/* Address list */}
      <div className="space-y-0 divide-y divide-slate-100">
        {user.addresses.map((address) => (
          <div
            key={address.id}
            className="flex items-start justify-between gap-4 py-5 first:pt-0 last:pb-0"
          >
            <div className="flex items-start gap-4">
              {/* Home icon */}
              <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${address.isDefault ? 'bg-emerald-100' : 'bg-slate-100'}`}>
                <Home size={20} className={address.isDefault ? 'text-emerald-600' : 'text-slate-500'} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-slate-900">
                    {address.type}
                  </h3>
                  {address.isDefault && (
                    <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-100 text-xs font-medium">
                      Default
                    </Badge>
                  )}
                </div>

                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  {address.addressLine}
                  <br />
                  {address.city}, {address.state} {address.pincode}
                  <br />
                  India
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <button className="h-9 w-9 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition text-slate-400 hover:text-slate-600">
                <Pencil size={14} />
              </button>
              <button className="h-9 w-9 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition text-slate-400 hover:text-red-500">
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressCard;