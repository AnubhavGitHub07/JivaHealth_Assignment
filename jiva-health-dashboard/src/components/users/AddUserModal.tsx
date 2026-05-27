import React, { useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronDown } from "lucide-react";
import { useUserStore } from "../../store/userStore";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddUserModal = ({ isOpen, onClose }: AddUserModalProps) => {
  const addUser = useUserStore((state) => state.addUser);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("India");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Full Name and Email are required fields.");
      return;
    }

    // Call store action to add user
    addUser({
      name,
      email,
      phone,
      dob,
      gender,
      bloodGroup,
      role: "Patient", // Default role
      status: "Active", // Default status
      addressLine,
      city,
      state,
      pincode,
    });

    // Reset form states
    setName("");
    setEmail("");
    setPhone("");
    setDob("");
    setGender("");
    setBloodGroup("");
    setAddressLine("");
    setPincode("");
    setCity("");
    setState("");
    setCountry("India");

    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-in fade-in-0 duration-200">
      {/* Backdrop overlay closer */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-white rounded-[28px] shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col z-10 animate-in zoom-in-95 duration-200">
        
        {/* Content Container (Scrollable if viewport is small) */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col overflow-y-auto max-h-[90vh]">
          
          {/* Header */}
          <div className="flex justify-between items-start pb-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-800">
                Add New User
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Create a new user account with role and permissions
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
            
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-700 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g., John Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#F4F6F8] border border-transparent rounded-xl h-11 px-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-slate-300 focus:bg-white transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-700 mb-1.5">
                Email *
              </label>
              <input
                type="email"
                required
                placeholder="john.smith@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#F4F6F8] border border-transparent rounded-xl h-11 px-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-slate-300 focus:bg-white transition"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-700 mb-1.5">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="+91 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#F4F6F8] border border-transparent rounded-xl h-11 px-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-slate-300 focus:bg-white transition"
              />
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-700 mb-1.5">
                Date of Birth
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full bg-[#F4F6F8] border border-transparent rounded-xl h-11 px-4 text-sm text-slate-700 outline-none focus:border-slate-300 focus:bg-white transition cursor-pointer"
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-700 mb-1.5">
                Gender
              </label>
              <div className="relative">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full bg-[#F4F6F8] border border-transparent rounded-xl h-11 pl-4 pr-10 text-sm text-slate-700 outline-none focus:border-slate-300 focus:bg-white transition cursor-pointer appearance-none"
                >
                  <option value="" disabled hidden>
                    Select gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 pointer-events-none" />
              </div>
            </div>

            {/* Blood Group */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-700 mb-1.5">
                Blood Group
              </label>
              <div className="relative">
                <select
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  className="w-full bg-[#F4F6F8] border border-transparent rounded-xl h-11 pl-4 pr-10 text-sm text-slate-700 outline-none focus:border-slate-300 focus:bg-white transition cursor-pointer appearance-none"
                >
                  <option value="" disabled hidden>
                    Select blood group
                  </option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 pointer-events-none" />
              </div>
            </div>

            {/* Area Detail */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <label className="text-xs font-semibold text-slate-700 mb-1.5">
                Area Detail
              </label>
              <input
                type="text"
                placeholder="House/Flat No., Building Name, Street"
                value={addressLine}
                onChange={(e) => setAddressLine(e.target.value)}
                className="w-full bg-[#F4F6F8] border border-transparent rounded-xl h-11 px-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-slate-300 focus:bg-white transition"
              />
            </div>

            {/* Pin Code */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-700 mb-1.5">
                Pin Code
              </label>
              <input
                type="text"
                placeholder="400001"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full bg-[#F4F6F8] border border-transparent rounded-xl h-11 px-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-slate-300 focus:bg-white transition"
              />
            </div>

            {/* City */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-700 mb-1.5">
                City
              </label>
              <input
                type="text"
                placeholder="Mumbai"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-[#F4F6F8] border border-transparent rounded-xl h-11 px-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-slate-300 focus:bg-white transition"
              />
            </div>

            {/* State */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-700 mb-1.5">
                State
              </label>
              <div className="relative">
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full bg-[#F4F6F8] border border-transparent rounded-xl h-11 pl-4 pr-10 text-sm text-slate-700 outline-none focus:border-slate-300 focus:bg-white transition cursor-pointer appearance-none"
                >
                  <option value="" disabled hidden>
                    Select state
                  </option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Gujarat">Gujarat</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 pointer-events-none" />
              </div>
            </div>

            {/* Country */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-700 mb-1.5">
                Country
              </label>
              <input
                type="text"
                disabled
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-[#F4F6F8] border border-transparent rounded-xl h-11 px-4 text-sm text-slate-400 outline-none font-medium cursor-not-allowed select-none"
              />
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-slate-100 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-[#E2E8F0] hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-lg cursor-pointer transition duration-150 active:scale-[0.98]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#1C252E] hover:bg-[#2D3748] text-white text-sm font-semibold rounded-lg cursor-pointer transition duration-150 shadow-sm active:scale-[0.98]"
            >
              Add User
            </button>
          </div>

        </form>
      </div>
    </div>,
    document.body
  );
};

export default AddUserModal;
