import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";

const UserDetailsTabs = () => {
  return (
    <Tabs defaultValue="overview">
      <TabsList className="bg-white border border-slate-200 rounded-2xl p-1 h-auto flex flex-wrap gap-2">
        
        <TabsTrigger
          value="overview"
          className="rounded-xl px-5 py-2"
        >
          Overview
        </TabsTrigger>

        <TabsTrigger
          value="orders"
          className="rounded-xl px-5 py-2"
        >
          Orders & Bookings
        </TabsTrigger>

        <TabsTrigger
          value="payments"
          className="rounded-xl px-5 py-2"
        >
          Payments
        </TabsTrigger>

        <TabsTrigger
          value="family"
          className="rounded-xl px-5 py-2"
        >
          Family Members
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default UserDetailsTabs;