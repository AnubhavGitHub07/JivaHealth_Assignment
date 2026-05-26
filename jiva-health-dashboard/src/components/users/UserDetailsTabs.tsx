import type { User } from "../../types/user.types";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";
import OrdersTab from "./OrdersTab";
import PaymentsTab from "./PaymentsTab";
import FamilyMembersTab from "./FamilyMembersTab";
import PersonalInfoCard from "./PersonalInfoCard";
import AddressCard from "./AddressCard";

interface UserDetailsTabsProps {
  user: User;
}

const UserDetailsTabs = ({
  user,
}: UserDetailsTabsProps) => {
  return (
    <Tabs
      defaultValue="overview"
      className="space-y-8"
    >
      <TabsList className="bg-white border border-slate-200 rounded-2xl p-2 h-auto flex flex-wrap gap-2 w-full sm:w-auto">

        <TabsTrigger
          value="overview"
          className="rounded-xl px-5 py-2.5 text-sm font-medium text-slate-500 transition-all duration-200 data-active:bg-blue-600 data-active:text-white data-active:shadow-md hover:bg-slate-100 hover:text-slate-700 data-active:hover:bg-blue-700 data-active:hover:text-white"
        >
          Overview
        </TabsTrigger>

        <TabsTrigger
          value="orders"
          className="rounded-xl px-5 py-2.5 text-sm font-medium text-slate-500 transition-all duration-200 data-active:bg-blue-600 data-active:text-white data-active:shadow-md hover:bg-slate-100 hover:text-slate-700 data-active:hover:bg-blue-700 data-active:hover:text-white"
        >
          Orders & Bookings
        </TabsTrigger>

        <TabsTrigger
          value="payments"
          className="rounded-xl px-5 py-2.5 text-sm font-medium text-slate-500 transition-all duration-200 data-active:bg-blue-600 data-active:text-white data-active:shadow-md hover:bg-slate-100 hover:text-slate-700 data-active:hover:bg-blue-700 data-active:hover:text-white"
        >
          Payments
        </TabsTrigger>

        <TabsTrigger
          value="family"
          className="rounded-xl px-5 py-2.5 text-sm font-medium text-slate-500 transition-all duration-200 data-active:bg-blue-600 data-active:text-white data-active:shadow-md hover:bg-slate-100 hover:text-slate-700 data-active:hover:bg-blue-700 data-active:hover:text-white"
        >
          Family Members
        </TabsTrigger>
      </TabsList>

      <TabsContent
        value="overview"
        className="animate-in fade-in-0 duration-300"
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <PersonalInfoCard user={user} />
          <AddressCard user={user} />
        </div>
      </TabsContent>

      <TabsContent
        value="orders"
        className="animate-in fade-in-0 duration-300"
      >
        <OrdersTab user={user} />
      </TabsContent>

      <TabsContent
        value="payments"
        className="animate-in fade-in-0 duration-300"
      >
        <PaymentsTab user={user} />
      </TabsContent>

      <TabsContent
        value="family"
        className="animate-in fade-in-0 duration-300"
      >
        <FamilyMembersTab user={user} />
      </TabsContent>
    </Tabs>
  );
};

export default UserDetailsTabs;