import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import StatsCards from "../components/users/StatsCards";
import UsersList from "../components/users/UsersList";
import UsersToolbar from "../components/users/UsersToolbar";
import AddUserModal from "../components/users/AddUserModal";
import { useUserStore } from "../store/userStore";
import { Plus } from "lucide-react";

const UserManagement = () => {
  const users = useUserStore((state) => state.users);

  // Modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [roleFilter, setRoleFilter] = useState("All Roles");

  // Filtering logic
  const filteredUsers = users.filter((user) => {
    // Search filter
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase());

    // Status filter
    const matchesStatus =
      statusFilter === "All Status" || user.status === statusFilter;

    // Role filter
    const matchesRole =
      roleFilter === "All Roles" ||
      (roleFilter === "Support Staff" && user.role === "Nurse") || // In mockup, david kim (nurse) is Support Staff
      (roleFilter === "Patient" && user.role === "Patient") ||
      (roleFilter === "Nurse" && user.role === "Nurse");

    return matchesSearch && matchesStatus && matchesRole;
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1E293B]">
              User Management
            </h1>
            <p className="text-slate-400 mt-1 text-sm md:text-base">
              Manage user accounts and permissions
            </p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-[#1C252E] hover:bg-[#2D3748] text-white px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 transition-all shrink-0 shadow-sm cursor-pointer active:scale-[0.98]"
          >
            <Plus className="h-4 w-4" />
            Add User
          </button>
        </div>

        {/* Stats */}
        <StatsCards />

        {/* Toolbar */}
        <UsersToolbar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          roleFilter={roleFilter}
          onRoleFilterChange={setRoleFilter}
        />

        {/* Users */}
        <UsersList users={filteredUsers} />
      </div>

      {/* Add User Modal */}
      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </DashboardLayout>
  );
};

export default UserManagement;