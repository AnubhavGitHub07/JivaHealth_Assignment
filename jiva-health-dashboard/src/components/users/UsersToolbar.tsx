import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Search,
  SlidersHorizontal,
  Plus,
} from "lucide-react";

const UsersToolbar = () => {
  return (
  <div className="flex flex-col xl:flex-row gap-4 justify-between">
      {/* Search */}
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <Input
          placeholder="Search by patient, doctor, or specialty..."
          className="pl-10 h-12 rounded-xl"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="outline"
          className="h-12 rounded-xl"
        >
          <SlidersHorizontal
            size={16}
            className="mr-2"
          />

          All Status
        </Button>

        <Button className="h-12 rounded-xl bg-slate-900 hover:bg-slate-800">
          <Plus
            size={16}
            className="mr-2"
          />

          Add User
        </Button>
      </div>
    </div>
  );
};

export default UsersToolbar;