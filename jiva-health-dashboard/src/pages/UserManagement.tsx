import DashboardLayout from "../components/layout/DashboardLayout";
import StatsCards from "../components/users/StatsCards";
import UsersList from "../components/users/UsersList";
import UsersToolbar from "../components/users/UsersToolbar";

const UserManagement = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Heading */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              User Management
            </h1>
            <p className="text-slate-500 mt-2 text-sm md:text-base">
              Manage user accounts and permissions
            </p>
          </div>
        </div>

        {/* Stats */}
        <StatsCards />

        {/* Toolbar */}
        <UsersToolbar />

        {/* Users */}
        <UsersList />
      </div>
    </DashboardLayout>
  );
};

export default UserManagement;