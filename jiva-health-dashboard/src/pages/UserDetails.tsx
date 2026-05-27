import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import UserProfileHero from "../components/users/UserProfileHero";
import UserMetrics from "../components/users/UserMetrics";
import UserDetailsTabs from "../components/users/UserDetailsTabs";
import { useUserStore } from "../store/userStore";
import { Button } from "../components/ui/button";
import { ArrowLeft, UserX } from "lucide-react";

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const user = useUserStore((state) =>
    state.users.find((u) => u.id === Number(id))
  );

  if (!user) {
    return (
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
          <div className="h-20 w-20 rounded-full bg-slate-100 flex items-center justify-center">
            <UserX size={36} className="text-slate-400" />
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">
              User Not Found
            </h2>
            <p className="text-slate-500 max-w-md">
              The user you're looking for doesn't exist or may have been removed.
            </p>
          </div>
          <Button
            onClick={() => navigate("/")}
            className="rounded-xl gap-2"
          >
            <ArrowLeft size={16} />
            Back to User Management
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Hero */}
        <UserProfileHero user={user} />

        {/* Metrics */}
        <UserMetrics user={user} />

        {/* Tabs + Dynamic Content */}
        <UserDetailsTabs user={user} />
      </div>
    </DashboardLayout>
  );
};

export default UserDetails;