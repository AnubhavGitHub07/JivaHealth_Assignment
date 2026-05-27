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
import {
  User as UserIcon,
  CalendarCheck,
  CreditCard,
  Users,
} from "lucide-react";

interface UserDetailsTabsProps {
  user: User;
}

const UserDetailsTabs = ({
  user,
}: UserDetailsTabsProps) => {
  return (
    <Tabs
      defaultValue="overview"
      className="space-y-6"
    >
      <TabsList className="bg-transparent border-b border-slate-200 rounded-none p-0 h-auto flex gap-8 w-full justify-start overflow-x-auto whitespace-nowrap pb-0.5 scrollbar-none">
        <TabsTrigger
          value="overview"
          className="rounded-none border-b-2 border-transparent px-1 pb-3 pt-3 -mb-px text-sm font-medium text-slate-500 transition-all data-active:border-b-emerald-600 data-active:text-emerald-600 data-active:bg-transparent data-active:shadow-none hover:text-slate-700 flex items-center gap-2 cursor-pointer shrink-0"
        >
          <UserIcon size={16} />
          Overview
        </TabsTrigger>

        <TabsTrigger
          value="orders"
          className="rounded-none border-b-2 border-transparent px-1 pb-3 pt-3 -mb-px text-sm font-medium text-slate-500 transition-all data-active:border-b-emerald-600 data-active:text-emerald-600 data-active:bg-transparent data-active:shadow-none hover:text-slate-700 flex items-center gap-2 cursor-pointer shrink-0"
        >
          <CalendarCheck size={16} />
          Orders & Bookings
        </TabsTrigger>

        <TabsTrigger
          value="payments"
          className="rounded-none border-b-2 border-transparent px-1 pb-3 pt-3 -mb-px text-sm font-medium text-slate-500 transition-all data-active:border-b-emerald-600 data-active:text-emerald-600 data-active:bg-transparent data-active:shadow-none hover:text-slate-700 flex items-center gap-2 cursor-pointer shrink-0"
        >
          <CreditCard size={16} />
          Payments
        </TabsTrigger>

        <TabsTrigger
          value="family"
          className="rounded-none border-b-2 border-transparent px-1 pb-3 pt-3 -mb-px text-sm font-medium text-slate-500 transition-all data-active:border-b-emerald-600 data-active:text-emerald-600 data-active:bg-transparent data-active:shadow-none hover:text-slate-700 flex items-center gap-2 cursor-pointer shrink-0"
        >
          <Users size={16} />
          Family Members
        </TabsTrigger>
      </TabsList>

      <TabsContent
        value="overview"
        className=""
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <PersonalInfoCard user={user} />
          <AddressCard user={user} />
        </div>
      </TabsContent>

      <TabsContent
        value="orders"
        className=""
      >
        <OrdersTab user={user} />
      </TabsContent>

      <TabsContent
        value="payments"
        className=""
      >
        <PaymentsTab user={user} />
      </TabsContent>

      <TabsContent
        value="family"
        className=""
      >
        <FamilyMembersTab user={user} />
      </TabsContent>
    </Tabs>
  );
};

export default UserDetailsTabs;