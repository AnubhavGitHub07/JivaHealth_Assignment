import DashboardLayout from "../components/layout/DashboardLayout";
import UserProfileHero from "../components/users/UserProfileHero";
import UserMetrics from "../components/users/UserMetrics";
import PersonalInfoCard from "../components/users/PersonalInfoCard";
import AddressCard from "../components/users/AddressCard";
import UserDetailsTabs from "../components/users/UserDetailsTabs";
import { useUserStore } from "../store/userStore";

const UserDetails = () => {
  const user = useUserStore(
    (state) => state.users[0]
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        
        {/* Hero */}
        <UserProfileHero user={user} />

        {/* Metrics */}
        <UserMetrics user={user} />

        {/* Tabs */}
        <UserDetailsTabs />

        {/* Information Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          
          <PersonalInfoCard user={user} />

          <AddressCard user={user} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDetails;