import { useState } from "react";
import type { User } from "../../types/user.types";
import { Badge } from "../ui/badge";
import { Phone, Calendar, Trash2, Plus, X } from "lucide-react";
import { useUserStore } from "../../store/userStore";

interface FamilyMembersTabProps {
  user: User;
}

const FamilyMembersTab = ({ user }: FamilyMembersTabProps) => {
  const { addFamilyMember, deleteFamilyMember } = useUserStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("Spouse");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleOpenModal = () => {
    setName("");
    setRelationship("Spouse");
    setDob("");
    setPhone("");
    setErrors({});
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!dob) newErrors.dob = "Date of birth is required";
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,15}$/.test(phone.trim())) {
      newErrors.phone = "Enter a valid phone number (e.g. +91 9876543210)";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    addFamilyMember(user.id, {
      name: name.trim(),
      relationship,
      dob,
      phone: phone.trim(),
    });

    handleCloseModal();
  };

  const handleDelete = (memberId: number) => {
    if (confirm("Are you sure you want to remove this family member?")) {
      deleteFamilyMember(user.id, memberId);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-900">Family Members</h2>
        <button
          onClick={handleOpenModal}
          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl h-10 px-5 text-sm font-medium transition cursor-pointer"
        >
          <Plus size={16} />
          Add Member
        </button>
      </div>

      {/* Member list */}
      <div className="space-y-0 divide-y divide-slate-100">
        {user.familyMembers.length === 0 ? (
          <div className="py-8 text-center text-slate-500 text-sm">
            No family members added yet. Click "+ Add Member" to get started.
          </div>
        ) : (
          user.familyMembers.map((member) => {
            const initials = member.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .substring(0, 2)
              .toUpperCase();

            return (
              <div
                key={member.id}
                className="flex items-start justify-between gap-4 py-5 first:pt-0 last:pb-0"
              >
                {/* Left: Avatar + Details */}
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold text-sm shrink-0">
                    {initials}
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base font-semibold text-slate-900">
                      {member.name}
                    </h3>

                    <Badge
                      variant="secondary"
                      className="text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-100 rounded-md px-2.5 py-0.5"
                    >
                      {member.relationship}
                    </Badge>

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Phone size={14} className="text-slate-400" />
                      {member.phone}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar size={14} className="text-slate-400" />
                      {member.dob}
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="h-9 w-9 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition text-slate-400 hover:text-red-500 cursor-pointer"
                    title="Remove Member"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900">
                Add Family Member
              </h3>
              <button
                onClick={handleCloseModal}
                className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full h-10 px-3 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${
                    errors.name ? "border-red-500" : "border-slate-200"
                  }`}
                  placeholder="Enter name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Relationship
                </label>
                <select
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
                >
                  <option value="Spouse">Spouse</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Child">Child</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className={`w-full h-10 px-3 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${
                    errors.dob ? "border-red-500" : "border-slate-200"
                  }`}
                />
                {errors.dob && (
                  <p className="mt-1 text-xs text-red-500">{errors.dob}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full h-10 px-3 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${
                    errors.phone ? "border-red-500" : "border-slate-200"
                  }`}
                  placeholder="+91 98765 43210"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 mt-6">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 h-10 rounded-lg border border-slate-200 hover:bg-slate-50 text-sm font-medium text-slate-700 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 h-10 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition cursor-pointer"
                >
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FamilyMembersTab;